import { dbServerless } from '../../connections/serverlessConnection';
import { db } from '../../connections/connection';
import { eq } from 'drizzle-orm';
import { cleanSlug } from '../../../helpers/slugs/cleanSlugs';
import type { Page } from '../../../types/page';
import { PagesTable, PagesToSectionsM2MTable } from './schema';
import { SectionInstancesTable } from '../section_instances/schema';
import type { Sections } from '../../../types/sections';
import type { MetaTags } from '../../../types/meta';
import { error } from '@sveltejs/kit';

export const getPages = async () => {
	return await dbServerless.select().from(PagesTable);
};

export const getPage = async (fullSlug: string) => {
	const cleanedSlug = cleanSlug(fullSlug);

	const results = await dbServerless
		.select()
		.from(PagesTable)
		.leftJoin(PagesToSectionsM2MTable, eq(PagesToSectionsM2MTable.PageFK, PagesTable.id))
		.leftJoin(
			SectionInstancesTable,
			eq(PagesToSectionsM2MTable.SectionInstanceFK, SectionInstancesTable.id)
		)
		.where(eq(PagesTable.slug, cleanedSlug));

	const formattedData: Page = results.reduce(
		(agg: Page, cur) => {
			const pageData = cur.pages;
			const sectionInstance = cur.section_instances;
			const pageSectionInstance = cur.pages_to_section_instances;

			return {
				id: pageData?.id!,
				name: pageData?.referenceTitle!,
				sections: [
					...agg?.sections,
					{
						template: sectionInstance?.template,
						id: sectionInstance?.id,
						order: pageSectionInstance?.order,
						settings: sectionInstance?.settings
					}
				],
				meta: {
					title: pageData?.metaTitle || '',
					description: pageData?.metaDescription || '',
					robots: pageData?.metaRobots!,
					marketingTags: {
						// ga4: results?.siteSettings.globalMarketingTags_searchConsole!,
						// searchConsole: results?.siteSettings.globalMarketingTags_searchConsole!
						ga4: null,
						searchConsole: null
					}
				} as Page['meta'],
				slug: pageData?.slug!
			};
		},
		{
			id: -1,
			name: '',
			sections: [] as Sections[],
			meta: {
				title: '',
				description: '',
				robots: '',
				marketingTags: {
					ga4: null,
					searchConsole: null
				}
			} as MetaTags,
			slug: ''
		}
	);

	if (formattedData.id == -1) throw error(404, 'Not found');

	return formattedData;
};

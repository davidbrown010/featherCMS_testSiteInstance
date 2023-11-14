import { getPages } from '../../globalFeatherCMS/db/models/pages/handler';
import type { Nav } from '../../globalFeatherCMS/types/nav';

export async function load() {
	const navigation: Nav = {
		navItems: [
			{
				label: 'Home',
				url: '/',
				subItems: null
			},
			{
				label: 'About',
				url: '/about',
				subItems: null
			},
			{
				label: 'Contact',
				url: '/contact-us',
				subItems: null
			}
		]
	};

	const sitemap = (await getPages()).reduce(
		(agg: Nav, cur) => {
			agg.navItems.push({
				label: cur.referenceTitle,
				url: cur.slug,
				subItems: null
			});

			return agg;
		},
		{ navItems: [] } as Nav
	);

	return {
		navigation,
		sitemap
	};
}

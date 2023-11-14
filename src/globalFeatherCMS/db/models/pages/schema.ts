import { mysqlTable, serial, bigint, varchar, datetime, tinyint } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { SectionInstancesTable } from '../section_instances/schema';
import { SiteSettingsTable } from '../site_settings/schema';

export const PagesTable = mysqlTable('pages', {
	id: serial('id').primaryKey(),
	slug: varchar('slug', { length: 256 }).notNull().unique(),
	referenceTitle: varchar('reference_title', { length: 256 }).notNull(),
	metaTitle: varchar('meta_title', { length: 256 }),
	metaDescription: varchar('meta_description', { length: 256 }),
	metaRobots: varchar('meta_robots', { length: 256 }).default('index,follow'),
	dateCreated: datetime('createdAt').default(new Date()),
	siteFK: bigint('site_fk', { mode: 'bigint', unsigned: true }).notNull()
});

// export const PagesToSectionsRelations = relations(PagesTable, ({ many }) => ({
// 	sectionInstances: many(SectionInstancesTable)
// }));

export const PagesToSiteRelations = relations(PagesTable, ({ one }) => ({
	site: one(SiteSettingsTable, {
		fields: [PagesTable.siteFK],
		references: [SiteSettingsTable.id]
	})
}));

export const PagesToSectionsM2MTable = mysqlTable('pages_to_section_instances', {
	id: serial('id').primaryKey(),
	PageFK: bigint('page_fk', { mode: 'bigint', unsigned: true }).notNull(),
	SectionInstanceFK: bigint('section_instance_fk', { mode: 'bigint', unsigned: true }).notNull(),
	order: tinyint('section_order').notNull()
});

export const PagesToSectionsM2MRelations = relations(PagesToSectionsM2MTable, ({ one }) => ({
	page: one(PagesTable, {
		fields: [PagesToSectionsM2MTable.PageFK],
		references: [PagesTable.id]
	}),
	sectionInstance: one(SectionInstancesTable, {
		fields: [PagesToSectionsM2MTable.SectionInstanceFK],
		references: [SectionInstancesTable.id]
	})
}));

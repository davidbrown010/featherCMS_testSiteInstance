import { datetime, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { PagesTable } from '../pages/schema';

export const SiteSettingsTable = mysqlTable('site_settings', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	dateCreated: datetime('createdAt').default(new Date()),
	globalMarketingTags_GA4: varchar('global_marketing_tags_ga4', { length: 12 }),
	globalMarketingTags_searchConsole: varchar('global_marketing_tags_search_console', { length: 50 })
});

export const SiteSettingsToPageRelations = relations(SiteSettingsTable, ({ many }) => ({
	pages: many(PagesTable)
}));

import { mysqlTable, serial, bigint, varchar, json } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { PagesTable } from '../pages/schema';

export const SectionInstancesTable = mysqlTable('section_instances', {
	id: serial('id').primaryKey(),
	template: varchar('section_template', { length: 256 }).notNull(),
	settings: json('settings')
});

// export const SectionInstancesToPagesRelations = relations(SectionInstancesTable, ({ many }) => ({
// 	pages: many(PagesTable)
// }));

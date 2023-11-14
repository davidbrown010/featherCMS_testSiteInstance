import 'dotenv/config';

import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import * as schema_pages from '../models/pages/schema';
import * as schema_section_instances from '../models/section_instances/schema';

const connection = await mysql.createConnection({
	uri: process.env.DATABASE_URL!
});

export const db = drizzle(connection, {
	mode: 'planetscale',
	schema: { ...schema_pages, ...schema_section_instances }
});

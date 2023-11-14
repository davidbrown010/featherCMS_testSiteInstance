import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export default {
	schema: './src/globalFeatherCMS/db/models/**/schema.ts',
	out: './drizzle',
	driver: 'mysql2',
	dbCredentials: {
		uri: process.env.DATABASE_URL!
	}
} satisfies Config;

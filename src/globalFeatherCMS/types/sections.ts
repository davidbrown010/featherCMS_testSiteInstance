export type Sections = Section[];

import type { SchemaSetting } from '../schema/setting';

type Section = {
	order: number;
	template: string;
	settings: SchemaSetting[] | null;
	id: number;
};

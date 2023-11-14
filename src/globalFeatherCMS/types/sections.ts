export type Sections = Section[];

import type { SchemaSetting } from '../schema/setting';

export type Section = {
	order: number;
	template: string;
	settings: SchemaSetting[] | null;
	id: number;
};

export type SectionViewType = 'client' | 'backend'
import type { Sections } from './sections';
import type { MetaTags } from './meta';

export type Page = {
	id: number;
	name: string;
	sections: Sections;
	meta: MetaTags;
	slug: string;
};

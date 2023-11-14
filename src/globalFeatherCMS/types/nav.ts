export type Nav = {
	navItems: navItem[];
};

type navItem = {
	label: string;
	url: string;
	subItems: navItem[] | null;
};

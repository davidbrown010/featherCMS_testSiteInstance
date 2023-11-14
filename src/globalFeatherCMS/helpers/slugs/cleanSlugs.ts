export const cleanSlug = (slug: string) => {
	if (slug == "") return slug
	let returnSlug = slug.substring(0, 1) == '/' ? slug.substring(1) : slug;
	returnSlug = slug.substring(-1) == '/' ? slug.substring(1, slug.length) : slug;
	return returnSlug;
};

export const extrapolateSlugNesting = (slug: string) => {
	return cleanSlug(slug).split('/');
};

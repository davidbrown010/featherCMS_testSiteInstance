import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { PRIVATE_FEATHER_CMS_API_KEY } from '$env/static/private';

import { sections } from '$lib/localFeatherCMS/sections/index.ts';

export const GET: RequestHandler = ({ url }) => {
	if (!url.searchParams.has('Authorization')) throw error(401);
	if (url.searchParams.get('Authorization') != `Bearer ${PRIVATE_FEATHER_CMS_API_KEY}`)
		throw error(401);

	return json(sections);
};

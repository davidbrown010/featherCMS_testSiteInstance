export const prerender = true;

import { featherCMS_ServerLoad } from '../../../../../globalFeatherCMS/helpers/load/serverLoadPageData';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async ({ url }) => {
	return await featherCMS_ServerLoad(url.pathname);
};

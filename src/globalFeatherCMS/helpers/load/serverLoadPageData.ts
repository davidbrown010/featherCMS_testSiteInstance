import { getPage } from '../../../globalFeatherCMS/db/models/pages/handler';
import type { Page } from '../../../globalFeatherCMS/types/page';

export const featherCMS_ServerLoad = async (pathname: string) => {
	
	const pageData: Page = await getPage(pathname)

	return {
		page: pageData
	};
}

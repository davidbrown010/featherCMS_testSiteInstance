import { redirect, type ServerLoad } from "@sveltejs/kit";


import { getPageById } from "../../../../globalFeatherCMS/db/models/pages/handler";
import type { Page } from "../../../../globalFeatherCMS/types/page";

export const load: ServerLoad = async ({params}) => {

    if (params.pageId == null) throw redirect(301, '/backend')

    const page: Page = await getPageById(params.pageId!);

    return {
        backend: {
            page
        }
    }

}
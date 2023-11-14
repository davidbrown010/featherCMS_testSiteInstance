import type { ServerLoad } from "@sveltejs/kit";
import { getPages } from "../../globalFeatherCMS/db/models/pages/handler";

export const load: ServerLoad = async (event) => {

    const pages = await getPages();

    return {
        backend: {
            pages
        }
    }

}
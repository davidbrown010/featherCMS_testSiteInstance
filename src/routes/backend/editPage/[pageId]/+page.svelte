<script lang="ts">

    export let data

    $: {console.log(data.backend.page)}

    import MetaDetails from '../../../../globalFeatherCMS/backend/components/editPage/metaDetails.svelte';
    import SectionsArrangement from '../../../../globalFeatherCMS/backend/components/editPage/sectionsArrangement.svelte';
    import PageDetails from '../../../../globalFeatherCMS/backend/components/editPage/pageDetails.svelte';
	import { FULL_PATH } from '../../../../globalFeatherCMS/helpers/urls/fullPath';

    //   {
    //     id: 2,
    //     name: 'Contact',
    //     sections: [
    //         { template: 'hero', id: 2, order: 0, settings: null },
    //         { template: 'paragraph', id: 5, order: 1, settings: null },
    //         { template: 'featured_products', id: 8, order: 2, settings: null },
    //         { template: 'paragraph', id: 6, order: 3, settings: null }
    //     ],
    //     meta: {
    //         title: '',
    //         description: '',
    //         robots: 'index,follow',
    //         marketingTags: { ga4: null, searchConsole: null }
    //     },
    //     slug: '/contact-us'
    //   }


</script>
<a href={FULL_PATH(`/backend`)}>{"< Dashboard"}</a>
<h1>{data.backend.page.name}</h1>

<PageDetails pageData={data.backend.page}></PageDetails>
<MetaDetails pageData={data.backend.page}></MetaDetails>
<SectionsArrangement pageData={data.backend.page}></SectionsArrangement>



<script lang="ts">
	// import type { Nav } from "../../globalFeatherCMS/types/nav";
	// import type { Page } from "../../globalFeatherCMS/types/page";

	import Head from '$lib/localFeatherCMS/sections_global/Head.svelte';
	import SectionWrapper from '$lib/localFeatherCMS/sections/SectionWrapper.svelte';

	export let data;

</script>

<Head meta={data.page.meta}/>

{#each data.page.sections as sectionData}
	<SectionWrapper section={sectionData} />
{/each}

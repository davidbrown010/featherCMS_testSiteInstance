<script lang="ts">
    
	import type { Page } from "../../../types/page";

    import SectionWrapper from "../../../frontendComponents/SectionWrapper.svelte";
	import { FULL_PATH } from "../../../helpers/urls/fullPath";

    export let pageData: Page

</script>
<h2>Sections</h2>
{#each pageData.sections as section}
    <SectionWrapper viewType="backend" section={section}></SectionWrapper>
{/each}
<a href={FULL_PATH(`/backend/editPage/${pageData.id}/importSection`)}>Add A Section</a>
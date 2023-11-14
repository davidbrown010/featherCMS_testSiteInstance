<script lang="ts">
	import type { Section, SectionViewType } from "../../../../globalFeatherCMS/types/sections";

    export let viewType: SectionViewType
    export let sectionSettings: Section['settings']
    export let sectionId: number
</script>

<section>
    <h1>Featured Products{viewType == 'backend' ? ' - dev': ''}</h1>
    <p>checkout all of our new products here</p>
    {#if sectionSettings}
        {#each Object.entries(sectionSettings) as [key, value]} 
            {key}: {value}
        {/each}
    {/if}
</section>
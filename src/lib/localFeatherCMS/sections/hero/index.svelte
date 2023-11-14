<script lang="ts">
	import type { Section, SectionViewType } from "../../../../globalFeatherCMS/types/sections";

    export let viewType: SectionViewType
    export let sectionSettings: Section['settings']
    export let sectionId: number
</script>

<section>
    <h1>Welcome!{viewType == 'backend' ? ' - dev': ''}</h1>
    <p>we are excited you are here</p>
    {#if sectionSettings}
        {#each Object.entries(sectionSettings) as [key, value]} 
            {key}: {value}
        {/each}
    {/if}
</section>
<script lang="ts">
	import type { Section, SectionViewType } from "../../../../globalFeatherCMS/types/sections";

    export let viewType: SectionViewType
    export let sectionSettings: Section['settings']
    export let sectionId: number
</script>

<section>
    <h1>Paragraph{viewType == 'backend' ? ' - dev': ''}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea maiores, illo omnis aliquam eveniet nobis molestias temporibus mollitia fugit corrupti commodi quos praesentium enim assumenda cum iste? Placeat, modi?</p>
    {#if sectionSettings}
        {#each Object.entries(sectionSettings) as [key, value]} 
            {key}: {value}
        {/each}
    {/if}
</section>
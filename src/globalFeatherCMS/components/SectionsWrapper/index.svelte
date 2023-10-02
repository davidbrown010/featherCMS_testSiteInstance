<script lang="ts">
    import type {Sections} from "../../types/sections";

    export let sections: Sections
</script>

{#each sections as section}
    {section.id}<br>
{/each}


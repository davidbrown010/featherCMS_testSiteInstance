<script lang="ts">
    export let navigation: string[]
</script>

{#each navigation as link}
    {link} - 
{/each}
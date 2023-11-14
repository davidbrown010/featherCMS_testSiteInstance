<script lang="ts">
	import { FULL_PATH } from '../../globalFeatherCMS/helpers/urls/fullPath.js';


    export let data

</script>
<h1>Backend</h1>

<h2>Pages</h2>
{#each data.backend.pages as page}
    <a href={FULL_PATH(`/backend/editPage/${page.id}`)}>{page.referenceTitle}</a><br>
{/each}
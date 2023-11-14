<script lang="ts">
    
	import type { Page } from "../../../types/page";

    export let pageData: Page

</script>

<p>Name: {pageData.name}</p>
<p>Slug: {pageData.slug}</p>
<p>Id: {pageData.id}</p>
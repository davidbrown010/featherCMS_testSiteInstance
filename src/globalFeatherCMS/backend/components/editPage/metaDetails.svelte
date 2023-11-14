<script lang="ts">
    
	import type { Page } from "../../../types/page";

    export let pageData: Page

</script>
<h2>Meta Details</h2>
<p>Meta Title: {pageData.meta.title}</p>
<p>Meta Description: {pageData.meta.description}</p>
<p>Robots: {pageData.meta.robots}</p>
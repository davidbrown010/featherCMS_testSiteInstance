<script lang="ts">
	import { page } from '$app/stores';
</script>

Whoops... looks like that page doesn't exist! Check out our sitemap below to see where you might
have been headed

<br />
<h2>Sitemap</h2>
{#each $page.data.sitemap.navItems as sitemapLink}
	<a href={sitemapLink.url}>{sitemapLink.label}</a><br />
{/each}
<br />

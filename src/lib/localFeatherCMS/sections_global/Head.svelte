<script lang="ts">
	import type { MetaTags } from '../../../globalFeatherCMS/types/meta';
	import type { SiteSettings } from '../../../globalFeatherCMS/types/siteSettings';

	export let meta: MetaTags;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="robots" content={meta.robots} />
	{#if meta.marketingTags.ga4}
		<!-- Google tag (gtag.js) -->
		<script
			async
			src="https://www.googletagmanager.com/gtag/js?id={meta.marketingTags.ga4}"
		></script>
		{@html `
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', ${meta.marketingTags.ga4});
			</script>
		`}
	{/if}
	{#if meta.marketingTags.searchConsole}
		<meta name="google-site-verification" content={meta.marketingTags.searchConsole} />
	{/if}
</svelte:head>

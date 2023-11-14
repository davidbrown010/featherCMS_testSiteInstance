<script lang="ts">
	import type { Page } from '../../globalFeatherCMS/types/page';

	import featured_products from './featured_products/index.svelte';
	import hero from './hero/index.svelte';
	import paragraph from './paragraph/index.svelte';

	const sections = [
		{
			id: 'featured_products',
			component: featured_products
		},
		{
			id: 'hero',
			component: hero
		},
		{
			id: 'paragraph',
			component: paragraph
		}
	];

	export let section: Page;

	$: sectionComponent = sections[sections.map((x) => x.id).indexOf(section.template)]?.component;
</script>

<svelte:component this={sectionComponent} />

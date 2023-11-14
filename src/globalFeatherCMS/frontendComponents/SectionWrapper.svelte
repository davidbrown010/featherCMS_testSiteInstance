<script lang="ts">
	import type { Page } from '../types/page';
	import type { Section, SectionViewType } from '../types/sections';

	import featured_products from '../../lib/localFeatherCMS/sections/featured_products/index.svelte';
	import hero from '../../lib/localFeatherCMS/sections/hero/index.svelte';
	import paragraph from '../../lib/localFeatherCMS/sections/paragraph/index.svelte';

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

	export let section: Section;

	export let viewType: SectionViewType = 'client'

	$: sectionComponent = sections[sections.map((x) => x.id).indexOf(section.template)]?.component;
</script>

<svelte:component this={sectionComponent} viewType={viewType} sectionSettings={section.settings} sectionId={section.id}/>

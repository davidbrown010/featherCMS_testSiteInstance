<script lang="ts">
	import { FULL_PATH } from '../../../globalFeatherCMS/helpers/urls/fullPath';
	import type { Nav } from '../../../globalFeatherCMS/types/nav';

	export let navigation: Nav;
</script>

{#each navigation.navItems as navItem}
	<a href={FULL_PATH(navItem.url)}>{navItem.label}</a>
{/each}

<script lang="ts">
	import type { Nav } from '../../../globalFeatherCMS/types/nav';

	export let navigation: Nav;
</script>

{#each navigation.navItems as navItem}
	<a href={navItem.url}>{navItem.label}</a>
{/each}

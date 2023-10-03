<script>
	import SectionsWrapper from "../../globalFeatherCMS/components/SectionsWrapper/index.svelte"

	export let data;
</script>

<SectionsWrapper sections={data.page.sections} />

<script>
	// import '../app.css';

	import Header from '$lib/localFeatherCMS/sections_global/Header.svelte';
	import Footer from '$lib/localFeatherCMS/sections_global/Footer.svelte';

	export let data;
</script>

<div>
	<Header navigation={data.navigation}/>
	<main><slot /></main>
	<Footer />
</div>

<script lang="ts">
	import Catalog from './_site/Catalog.svelte';
	import Hero from './_site/Hero.svelte';
	import Install from './_site/Install.svelte';
	import SiteFooter from './_site/SiteFooter.svelte';
	import SiteHeader from './_site/SiteHeader.svelte';
	import Tokens from './_site/Tokens.svelte';
</script>

<svelte:head>
	<title>mokorp-ui : composants Svelte 5, une pièce à deux faces</title>
	<meta
		name="description"
		content="Bibliothèque de composants Svelte 5 sur bits-ui, thème Signal : brut, minimaliste, lime réservé à l’action, en clair comme en sombre."
	/>
</svelte:head>

<SiteHeader />
<main>
	<Hero />
	<Catalog />
	<Tokens />
	<Install />
</main>
<SiteFooter />

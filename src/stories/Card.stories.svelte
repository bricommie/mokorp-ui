<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Card from '#lib/components/Card.svelte';

	const { Story } = defineMeta({
		title: 'Components/Card',
		component: Card
	});
</script>

<Story name="Default">
	<div class="p-4">
		<p class="font-display text-lg font-bold">Card title</p>
		<p class="mt-1 text-sm">Contenu de la carte, en sémantique.</p>
	</div>
</Story>

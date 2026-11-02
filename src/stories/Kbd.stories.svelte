<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Kbd from '#lib/components/Kbd.svelte';

	const { Story } = defineMeta({
		title: 'Components/Kbd',
		component: Kbd
	});
</script>

<Story name="Default" asChild>
	<p class="flex items-center gap-1"><Kbd>⌘</Kbd><Kbd>K</Kbd></p>
</Story>

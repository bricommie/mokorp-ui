<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ThemeToggle from '#lib/components/ThemeToggle.svelte';

	const { Story } = defineMeta({
		title: 'Components/ThemeToggle',
		component: ThemeToggle
	});
</script>

<Story name="Default" />

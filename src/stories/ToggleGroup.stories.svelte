<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as ToggleGroup from '#lib/components/toggle-group/index.js';
	import { Root } from '#lib/components/toggle-group/index.js';

	const { Story } = defineMeta({
		title: 'Components/ToggleGroup',
		component: Root,
		args: {
			type: 'single'
		}
	});
</script>

<Story name="Default" args={{ type: 'single', value: 'bold' }}>
	<ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
	<ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
	<ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
</Story>

<Story name="Multiple" args={{ type: 'multiple', value: ['bold', 'italic'] }}>
	<ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
	<ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
	<ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
</Story>

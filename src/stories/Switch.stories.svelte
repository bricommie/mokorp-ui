<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Switch from '#lib/components/switch/index.js';
	import { Root } from '#lib/components/switch/index.js';

	const { Story } = defineMeta({
		title: 'Components/Switch',
		component: Root,
		args: { checked: true }
	});
</script>

<Story name="Checked" args={{ checked: true }}>
	<Switch.Thumb />
</Story>

<Story name="Unchecked" args={{ checked: false }}>
	<Switch.Thumb />
</Story>

<Story name="Disabled" args={{ checked: true, disabled: true }}>
	<Switch.Thumb />
</Story>

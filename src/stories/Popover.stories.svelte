<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Popover from '#lib/components/popover/index.js';
	import { Root } from '#lib/components/popover/index.js';

	const { Story } = defineMeta({
		title: 'Components/Popover',
		component: Root
	});
</script>

<Story name="Default">
	<Popover.Trigger>Ouvrir le popover</Popover.Trigger>
	<Popover.Portal>
		<Popover.Content>Contenu du popover.</Popover.Content>
	</Popover.Portal>
</Story>

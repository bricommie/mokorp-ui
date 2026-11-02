<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as ContextMenu from '#lib/components/context-menu/index.js';
	import { Root } from '#lib/components/context-menu/index.js';

	const { Story } = defineMeta({
		title: 'Components/ContextMenu',
		component: Root
	});
</script>

<Story name="Default">
	<ContextMenu.Trigger>Clic droit ici</ContextMenu.Trigger>
	<ContextMenu.Portal>
		<ContextMenu.Content>
			<ContextMenu.Item>Copier</ContextMenu.Item>
			<ContextMenu.Item>Couper</ContextMenu.Item>
			<ContextMenu.Separator />
			<ContextMenu.Item>Coller</ContextMenu.Item>
		</ContextMenu.Content>
	</ContextMenu.Portal>
</Story>

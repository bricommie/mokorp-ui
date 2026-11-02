<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Dialog from '#lib/components/dialog/index.js';
	import { Root } from '#lib/components/dialog/index.js';

	const { Story } = defineMeta({
		title: 'Components/Dialog',
		component: Root,
		args: {
			open: true
		}
	});
</script>

<Story name="Default" args={{ open: true }}>
	<Dialog.Trigger>Ouvrir le dialog</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay />
		<Dialog.Content>
			<Dialog.Title>Êtes-vous sûr ?</Dialog.Title>
			<Dialog.Description>Cette action est irréversible.</Dialog.Description>
			<Dialog.Close>Fermer</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Story>

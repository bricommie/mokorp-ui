<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as AlertDialog from '#lib/components/alert-dialog/index.js';
	import { Root } from '#lib/components/alert-dialog/index.js';

	const { Story } = defineMeta({
		title: 'Components/AlertDialog',
		component: Root,
		args: {
			open: true
		}
	});
</script>

<Story name="Default" args={{ open: true }}>
	<AlertDialog.Trigger>Ouvrir l'alert-dialog</AlertDialog.Trigger>
	<AlertDialog.Portal>
		<AlertDialog.Overlay />
		<AlertDialog.Content>
			<AlertDialog.Title>Supprimer ?</AlertDialog.Title>
			<AlertDialog.Description>Cette action est définitive.</AlertDialog.Description>
			<AlertDialog.Cancel>Annuler</AlertDialog.Cancel>
			<AlertDialog.Action>Supprimer</AlertDialog.Action>
		</AlertDialog.Content>
	</AlertDialog.Portal>
</Story>

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Menubar from '#lib/components/menubar/index.js';
	import { Root } from '#lib/components/menubar/index.js';

	const { Story } = defineMeta({
		title: 'Components/Menubar',
		component: Root
	});
</script>

<Story name="Default">
	<Menubar.Menu>
		<Menubar.Trigger>Fichier</Menubar.Trigger>
		<Menubar.Portal>
			<Menubar.Content>
				<Menubar.Item>Nouveau</Menubar.Item>
				<Menubar.Item>Ouvrir</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>Quitter</Menubar.Item>
			</Menubar.Content>
		</Menubar.Portal>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>Édition</Menubar.Trigger>
		<Menubar.Portal>
			<Menubar.Content>
				<Menubar.Item>Annuler</Menubar.Item>
				<Menubar.Item>Rétablir</Menubar.Item>
			</Menubar.Content>
		</Menubar.Portal>
	</Menubar.Menu>
</Story>

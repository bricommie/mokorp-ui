<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Command from '#lib/components/command/index.js';
	import { Root } from '#lib/components/command/index.js';

	const { Story } = defineMeta({
		title: 'Components/Command',
		component: Root
	});
</script>

<Story name="Default">
	<Command.Input placeholder="Taper une commande..." />
	<Command.List>
		<Command.Empty>Aucun résultat.</Command.Empty>
		<Command.Group>
			<Command.GroupHeading>Suggestions</Command.GroupHeading>
			<Command.GroupItems>
				<Command.Item value="calendar">Calendrier</Command.Item>
				<Command.Item value="search">Recherche</Command.Item>
			</Command.GroupItems>
		</Command.Group>
		<Command.Separator />
		<Command.Group>
			<Command.GroupHeading>Paramètres</Command.GroupHeading>
			<Command.GroupItems>
				<Command.Item value="profile">Profil</Command.Item>
				<Command.Item value="settings">Réglages</Command.Item>
			</Command.GroupItems>
		</Command.Group>
	</Command.List>
</Story>

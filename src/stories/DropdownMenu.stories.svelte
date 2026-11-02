<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DropdownMenu from '#lib/components/dropdown-menu/index.js';
	import { Root } from '#lib/components/dropdown-menu/index.js';

	const { Story } = defineMeta({
		title: 'Components/DropdownMenu',
		component: Root
	});
</script>

<Story name="Default">
	<DropdownMenu.Trigger>Ouvrir le menu</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<DropdownMenu.GroupHeading>Mon compte</DropdownMenu.GroupHeading>
				<DropdownMenu.Item>Profil</DropdownMenu.Item>
				<DropdownMenu.Item>Paramètres</DropdownMenu.Item>
			</DropdownMenu.Group>
			<DropdownMenu.Separator />
			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>Plus</DropdownMenu.SubTrigger>
				<DropdownMenu.SubContent>
					<DropdownMenu.Item>Exporter</DropdownMenu.Item>
					<DropdownMenu.Item>Importer</DropdownMenu.Item>
				</DropdownMenu.SubContent>
			</DropdownMenu.Sub>
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</Story>

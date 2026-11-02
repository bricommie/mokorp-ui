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
				<DropdownMenu.SubTrigger>
					Plus
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="ml-auto h-4 w-4"
						><path d="m9 18 6-6-6-6"></path></svg
					>
				</DropdownMenu.SubTrigger>
				<DropdownMenu.SubContent>
					<DropdownMenu.Item>Exporter</DropdownMenu.Item>
					<DropdownMenu.Item>Importer</DropdownMenu.Item>
				</DropdownMenu.SubContent>
			</DropdownMenu.Sub>
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</Story>

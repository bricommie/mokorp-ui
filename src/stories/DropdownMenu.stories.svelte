<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DropdownMenu from '#lib/components/dropdown-menu/index.js';
	import { Root } from '#lib/components/dropdown-menu/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Superpositions/DropdownMenu',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Menu d'**actions** ouvert depuis un bouton (« … », menu de compte). Pour choisir une **valeur** de formulaire, utilisez `Select`.\n\n**Anatomie** : `DropdownMenu.Root` › `Trigger` ; `Portal` › `Content` › `Item` · `Group` › `GroupHeading` · `Separator` · `CheckboxItem` · `RadioGroup` › `RadioItem` · `Sub` › `SubTrigger` + `SubContent` · `Shortcut`.\n\n**Accessibilité** : flèches, Entrée, Échap, → / ← pour les sous-menus, saisie d'une lettre pour sauter. Coches et points sont intégrés."
				}
			}
		},
		argTypes: {
			open: {
				control: 'boolean',
				description: 'Ouverture du menu. Utilisable avec `bind:open`.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			onOpenChange: {
				description: "Appelé à chaque changement d'ouverture, avec le nouvel état.",
				table: {
					type: {
						summary: '(open: boolean) => void'
					},
					category: 'Événements'
				}
			}
		}
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

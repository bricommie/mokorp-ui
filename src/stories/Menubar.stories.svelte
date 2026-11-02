<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Menubar from '#lib/components/menubar/index.js';
	import { Root } from '#lib/components/menubar/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Superpositions/Menubar',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Barre de menus horizontale façon application de bureau (Fichier, Édition, Affichage).\n\n**Anatomie** : `Menubar.Root` › `Menubar.Menu` › `Trigger` ; `Portal` › `Content` › mêmes parties que `DropdownMenu`.\n\n**Accessibilité** : ← / → passent d'un menu à l'autre, ↓ ouvre."
				}
			}
		},
		argTypes: {
			value: {
				control: 'text',
				description: 'Menu actuellement ouvert. Utilisable avec `bind:value`.',
				table: {
					category: 'Props'
				}
			},
			loop: {
				control: 'boolean',
				description: 'Les flèches bouclent du dernier au premier menu.',
				table: {
					defaultValue: {
						summary: 'true'
					},
					category: 'Props'
				}
			}
		}
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

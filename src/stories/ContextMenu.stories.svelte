<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as ContextMenu from '#lib/components/context-menu/index.js';
	import { Root } from '#lib/components/context-menu/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Superpositions/ContextMenu',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Menu ouvert au **clic droit** (ou appui long) sur une zone. Comme il est invisible, ses actions doivent **aussi** exister ailleurs dans l'interface.\n\n**Anatomie** : `ContextMenu.Root` › `Trigger` (la zone) ; `Portal` › `Content` › mêmes parties que `DropdownMenu`."
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

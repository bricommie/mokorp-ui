<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Tooltip from '#lib/components/tooltip/index.js';
	import { Root } from '#lib/components/tooltip/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Superpositions/Tooltip',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Courte **aide textuelle** au survol ou au focus d'un élément (nom d'un bouton icône, raccourci). Jamais d'information indispensable ni de contenu interactif : utilisez `Popover`.\n\n**Anatomie** : `Tooltip.Provider` (une fois, à la racine de l'app) › `Tooltip.Root` › `Tooltip.Trigger` · `Tooltip.Content` (+ `Tooltip.Arrow`).\n\n**Accessibilité** : s'ouvre aussi au focus clavier, se ferme avec Échap. Un bouton icône a quand même besoin de son `aria-label`."
				}
			}
		},
		argTypes: {
			open: {
				control: 'boolean',
				description: "Ouverture de l'infobulle. Utilisable avec `bind:open`.",
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
			},
			delayDuration: {
				control: 'number',
				description:
					'Délai avant ouverture, en ms. Se règle de préférence une fois sur le `Provider`.',
				table: {
					defaultValue: {
						summary: '700'
					},
					category: 'Props'
				}
			}
		},
		args: {}
	});
</script>

<Story name="Default" asChild>
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>Survole-moi</Tooltip.Trigger>
			<Tooltip.Content>Une infobulle d'aide, structurelle à coins nets.</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</Story>

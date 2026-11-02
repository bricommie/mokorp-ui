<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Popover from '#lib/components/popover/index.js';
	import { Root } from '#lib/components/popover/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Superpositions/Popover',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Surface flottante **non modale** ancrée à un déclencheur : réglages rapides, formulaire court. Pour une simple aide au survol, utilisez `Tooltip`.\n\n**Anatomie** : `Popover.Root` › `Popover.Trigger` ; `Popover.Portal` › `Popover.Content` (+ `Popover.Arrow`, `Popover.Close`).\n\n**Accessibilité** : Échap ferme et rend le focus au déclencheur ; `aria-expanded` est géré.'
				}
			}
		},
		argTypes: {
			open: {
				control: 'boolean',
				description: 'Ouverture du popover. Utilisable avec `bind:open`.',
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
	<Popover.Trigger>Ouvrir le popover</Popover.Trigger>
	<Popover.Portal>
		<Popover.Content>Contenu du popover.</Popover.Content>
	</Popover.Portal>
</Story>

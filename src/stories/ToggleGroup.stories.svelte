<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as ToggleGroup from '#lib/components/toggle-group/index.js';
	import { Root } from '#lib/components/toggle-group/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Actions/ToggleGroup',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Groupe de bascules liées : **une seule** active (`type="single"`, comme un choix d\'alignement) ou **plusieurs** (`type="multiple"`, comme gras/italique/souligné).\n\n**Anatomie** : `ToggleGroup.Root` › `ToggleGroup.Item` (un par option).\n\n**Accessibilité** : *roving focus*, Tab entre dans le groupe, les flèches se déplacent entre les items. Donnez un `aria-label` au Root et à chaque item icône.'
				}
			}
		},
		argTypes: {
			type: {
				control: 'inline-radio',
				options: ['single', 'multiple'],
				description: '`single` : une valeur (string) ; `multiple` : plusieurs (string[]).',
				table: {
					category: 'Props'
				}
			},
			value: {
				description: 'Valeur(s) active(s). Utilisable avec `bind:value`.',
				table: {
					type: {
						summary: 'string | string[]'
					},
					category: 'Props'
				}
			},
			onValueChange: {
				description: 'Appelé quand la sélection change.',
				table: {
					type: {
						summary: '(value) => void'
					},
					category: 'Événements'
				}
			},
			disabled: {
				control: 'boolean',
				description: 'Désactive le composant : ni focus, ni interaction.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			orientation: {
				control: 'inline-radio',
				options: ['horizontal', 'vertical'],
				description: 'Orientation : détermine aussi les flèches du clavier (←/→ ou ↑/↓).',
				table: {
					defaultValue: {
						summary: 'horizontal'
					},
					category: 'Props'
				}
			}
		},
		args: {
			type: 'single'
		}
	});
</script>

<Story name="Default" args={{ type: 'single', value: 'bold' }}>
	<ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
	<ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
	<ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
</Story>

<Story name="Multiple" args={{ type: 'multiple', value: ['bold', 'italic'] }}>
	<ToggleGroup.Item value="bold">Bold</ToggleGroup.Item>
	<ToggleGroup.Item value="italic">Italic</ToggleGroup.Item>
	<ToggleGroup.Item value="underline">Underline</ToggleGroup.Item>
</Story>

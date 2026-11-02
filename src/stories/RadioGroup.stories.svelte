<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as RadioGroup from '#lib/components/radio-group/index.js';
	import { Root } from '#lib/components/radio-group/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/RadioGroup',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Choix **exclusif** parmi quelques options visibles (2 à 6). Au-delà, préférez `Select`.\n\n**Anatomie** : `RadioGroup.Root` › `RadioGroup.Item` (point intégré), chacun avec son `Label`.\n\n**Accessibilité** : un seul arrêt de tabulation, les flèches changent la sélection. Donnez un nom au groupe (`aria-label` ou `aria-labelledby` vers un titre).'
				}
			}
		},
		argTypes: {
			value: {
				control: 'text',
				description: 'Valeur sélectionnée. Utilisable avec `bind:value`.',
				table: {
					category: 'Props'
				}
			},
			onValueChange: {
				description: 'Appelé quand la sélection change.',
				table: {
					type: {
						summary: '(value: string) => void'
					},
					category: 'Événements'
				}
			},
			orientation: {
				control: 'inline-radio',
				options: ['vertical', 'horizontal'],
				description: 'Orientation du groupe (et des flèches clavier).',
				table: {
					defaultValue: {
						summary: "'vertical'"
					},
					category: 'Props'
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
			required: {
				control: 'boolean',
				description: 'Une option doit être choisie pour soumettre le formulaire.',
				table: {
					category: 'Props'
				}
			}
		},
		args: { value: 'option-one' }
	});
</script>

<Story name="Default" args={{ value: 'option-one' }}>
	<div class="flex items-center gap-2">
		<RadioGroup.Item value="option-one" />
		<span class="font-body text-sm text-foreground">Option One</span>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroup.Item value="option-two" />
		<span class="font-body text-sm text-foreground">Option Two</span>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroup.Item value="option-three" disabled />
		<span class="font-body text-sm text-foreground">Option Three (disabled)</span>
	</div>
</Story>

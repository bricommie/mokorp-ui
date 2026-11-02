<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Select from '#lib/components/select/index.js';
	import { Root } from '#lib/components/select/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/Select',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Choix d'une option dans une **liste fermée** (pays, statut). Pour plus de ~10 options ou une recherche, préférez `Combobox`.\n\n**Anatomie** : `Select.Root` › `Select.Trigger` › `Select.Value` ; `Select.Portal` › `Select.Content` › `Select.Group` › `Select.GroupHeading` · `Select.Item` (coche intégrée, prop `label`).\n\n**Accessibilité** : clavier complet (flèches, saisie d'une lettre, Entrée, Échap). Associez un `Label` au déclencheur."
				}
			}
		},
		argTypes: {
			type: {
				control: 'inline-radio',
				options: ['single', 'multiple'],
				description: '`single` : une valeur ; `multiple` : plusieurs.',
				table: {
					category: 'Props'
				}
			},
			value: {
				control: 'text',
				description: 'Valeur(s) sélectionnée(s). Utilisable avec `bind:value`.',
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
			open: {
				control: 'boolean',
				description: 'Ouverture de la liste. Utilisable avec `bind:open`.',
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
			name: {
				control: 'text',
				description: 'Nom du champ envoyé avec le formulaire.',
				table: {
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
		args: {
			type: 'single'
		}
	});
</script>

<Story name="Default" args={{ type: 'single', value: 'apple' }}>
	<Select.Trigger>
		<Select.Value placeholder="Choisir un fruit" />
	</Select.Trigger>
	<Select.Portal>
		<Select.Content>
			<Select.Group>
				<Select.GroupHeading>Fruits</Select.GroupHeading>
				<Select.Item value="apple" label="Pomme" />
				<Select.Item value="banana" label="Banane" />
				<Select.Item value="cherry" label="Cerise" />
			</Select.Group>
		</Select.Content>
	</Select.Portal>
</Story>

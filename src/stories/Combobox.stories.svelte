<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Combobox from '#lib/components/combobox/index.js';
	import { Root } from '#lib/components/combobox/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/Combobox',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Champ de saisie **avec suggestions filtrées** : longues listes, recherche. Le filtrage est à votre charge (dérivez la liste avec `$derived` à partir de la saisie).\n\n**Anatomie** : `Combobox.Root` › `Combobox.Input` · `Combobox.Trigger` ; `Combobox.Portal` › `Combobox.Content` › `Combobox.Item` (prop `label`).\n\n**Accessibilité** : rôle `combobox`, flèches pour parcourir, Entrée pour choisir, Échap pour fermer.'
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
				description: 'Ouverture des suggestions. Utilisable avec `bind:open`.',
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
			}
		},
		args: {
			type: 'single'
		}
	});
</script>

<Story name="Default" args={{ type: 'single', value: 'apple' }}>
	<Combobox.Input placeholder="Rechercher un fruit..." />
	<Combobox.Trigger></Combobox.Trigger>
	<Combobox.Portal>
		<Combobox.Content>
			<Combobox.Item value="apple" label="Pomme" />
			<Combobox.Item value="banana" label="Banane" />
			<Combobox.Item value="cherry" label="Cerise" />
		</Combobox.Content>
	</Combobox.Portal>
</Story>

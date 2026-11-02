<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Textarea from '#lib/components/Textarea.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/Textarea',
		component: Textarea,
		parameters: {
			docs: {
				description: {
					component:
						"Champ de saisie multiligne (commentaire, description). Mêmes règles que `Input` : un `Label`, un message d'erreur relié, jamais de placeholder comme libellé."
				}
			}
		},
		argTypes: {
			value: {
				control: 'text',
				description: 'Texte saisi. Utilisable avec `bind:value`.',
				table: {
					defaultValue: {
						summary: "''"
					},
					category: 'Props'
				}
			},
			placeholder: {
				control: 'text',
				description: 'Exemple de saisie.',
				table: {
					category: 'Props'
				}
			},
			rows: {
				control: 'number',
				description: 'Hauteur initiale, en lignes.',
				table: {
					category: 'Props'
				}
			},
			disabled: {
				control: 'boolean',
				description: 'Désactive le champ.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			'aria-invalid': {
				control: 'boolean',
				description: 'Signale une saisie invalide.',
				table: {
					category: 'Props'
				}
			}
		}
	});
</script>

<Story name="Default" args={{ placeholder: 'Notes de version…', class: 'w-80' }} />
<Story name="Invalid" args={{ value: 'Trop court', 'aria-invalid': true, class: 'w-80' }} />
<Story name="Disabled" args={{ placeholder: 'Désactivé', disabled: true, class: 'w-80' }} />

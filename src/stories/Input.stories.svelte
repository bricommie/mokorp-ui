<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Input from '#lib/components/Input.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/Input',
		component: Input,
		parameters: {
			docs: {
				description: {
					component:
						"Champ de saisie sur une ligne. Accepte tous les attributs d'un `<input>` natif (`type`, `name`, `autocomplete`, `required`…).\n\n**Accessibilité** : toujours associé à un `Label` (`for` = `id`). Le `placeholder` n'est **pas** un libellé. En erreur : `aria-invalid` + un message relié par `aria-describedby`."
				}
			}
		},
		argTypes: {
			value: {
				control: 'text',
				description: 'Valeur saisie. Utilisable avec `bind:value`.',
				table: {
					defaultValue: {
						summary: "''"
					},
					category: 'Props'
				}
			},
			type: {
				control: 'select',
				options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number', 'date'],
				description: 'Type de champ HTML : adapte le clavier mobile et la validation.',
				table: {
					defaultValue: {
						summary: "'text'"
					},
					category: 'Props'
				}
			},
			placeholder: {
				control: 'text',
				description: 'Exemple de saisie. Ne remplace jamais un `Label`.',
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
				description:
					"Signale une saisie invalide : bordure `destructive`. À accompagner d'un message d'erreur.",
				table: {
					category: 'Props'
				}
			}
		}
	});
</script>

<Story name="Default" args={{ placeholder: 'Type something…' }} />
<Story name="Disabled" args={{ placeholder: 'Disabled', disabled: true }} />

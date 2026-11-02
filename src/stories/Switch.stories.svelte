<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Switch from '#lib/components/switch/index.js';
	import { Root } from '#lib/components/switch/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/Switch',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Interrupteur **à effet immédiat** (activer les notifications). Si le choix ne s'applique qu'à la soumission d'un formulaire, utilisez `Checkbox`.\n\n**Anatomie** : `Switch.Root` › `Switch.Thumb`.\n\n**Accessibilité** : rôle `switch`, Espace pour basculer. Associez un `Label`."
				}
			}
		},
		argTypes: {
			checked: {
				control: 'boolean',
				description: 'État activé. Utilisable avec `bind:checked`.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			onCheckedChange: {
				description: "Appelé quand l'état change.",
				table: {
					type: {
						summary: '(checked: boolean) => void'
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
			}
		},
		args: { checked: true }
	});
</script>

<Story name="Checked" args={{ checked: true }}>
	<Switch.Thumb />
</Story>

<Story name="Unchecked" args={{ checked: false }}>
	<Switch.Thumb />
</Story>

<Story name="Disabled" args={{ checked: true, disabled: true }}>
	<Switch.Thumb />
</Story>

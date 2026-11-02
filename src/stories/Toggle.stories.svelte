<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Toggle from '#lib/components/Toggle.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Actions/Toggle',
		component: Toggle,
		parameters: {
			docs: {
				description: {
					component:
						"Bouton **à deux états** (activé / désactivé), comme « Gras » dans un éditeur. L'état est porté par `aria-pressed`, donc annoncé par les lecteurs d'écran.\n\nPour un groupe de bascules liées (alignement gauche/centre/droite), utilisez `ToggleGroup`.\n\n**Accessibilité** : le libellé ne doit **pas** changer avec l'état (« Gras », pas « Activer le gras » / « Désactiver le gras »)."
				}
			}
		},
		argTypes: {
			pressed: {
				control: 'boolean',
				description: 'État enfoncé. Utilisable avec `bind:pressed`.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			onPressedChange: {
				description: "Appelé quand l'état change.",
				table: {
					type: {
						summary: '(pressed: boolean) => void'
					},
					category: 'Événements'
				}
			},
			variant: {
				control: 'inline-radio',
				options: ['default', 'outline'],
				description: '`default` : sans bordure ; `outline` : bordure de contrôle visible.',
				table: {
					defaultValue: {
						summary: "'default'"
					},
					category: 'Props'
				}
			},
			size: {
				control: 'inline-radio',
				options: ['default', 'sm', 'lg'],
				description: 'Taille du bouton.',
				table: {
					defaultValue: {
						summary: "'default'"
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
			}
		},
		args: {
			variant: 'default',
			size: 'default'
		}
	});
</script>

<Story name="Default">Bold</Story>
<Story name="Outline" args={{ variant: 'outline' }}>Bold</Story>
<Story name="Small" args={{ size: 'sm' }}>Bold</Story>
<Story name="Large" args={{ size: 'lg' }}>Bold</Story>

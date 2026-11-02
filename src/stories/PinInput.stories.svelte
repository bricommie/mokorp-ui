<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as PinInput from '#lib/components/pin-input/index.js';
	import { Root } from '#lib/components/pin-input/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/PinInput',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Saisie d\'un **code court** (OTP, code de vérification), une case par caractère. Le collage d\'un code complet est géré.\n\n**Anatomie** : `PinInput.Root` (snippet `children` avec `cells`) › `PinInput.Cell`.\n\n**Accessibilité** : un seul vrai `<input>` caché porte la valeur ; ajoutez `autocomplete="one-time-code"` pour le remplissage automatique.'
				}
			}
		},
		argTypes: {
			value: {
				control: 'text',
				description: 'Code saisi. Utilisable avec `bind:value`.',
				table: {
					category: 'Props'
				}
			},
			maxlength: {
				control: 'number',
				description: 'Nombre de caractères (et de cases).',
				table: {
					defaultValue: {
						summary: '6'
					},
					category: 'Props'
				}
			},
			onComplete: {
				description: 'Appelé quand toutes les cases sont remplies.',
				table: {
					type: {
						summary: '(value: string) => void'
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
			maxlength: 4
		}
	});
</script>

<Story name="Default" asChild>
	<PinInput.Root maxlength={4}>
		{#snippet children({ cells })}
			{#each cells as cell}
				<PinInput.Cell {cell}>{cell.char}</PinInput.Cell>
			{/each}
		{/snippet}
	</PinInput.Root>
</Story>

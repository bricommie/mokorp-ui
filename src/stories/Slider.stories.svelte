<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Slider from '#lib/components/slider/index.js';
	import { Root } from '#lib/components/slider/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/Slider',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Choix d'une valeur (ou d'une plage) dans un intervalle continu : volume, prix maximum. Si la valeur exacte compte, ajoutez un `Input` à côté.\n\n**Anatomie** : `Slider.Root` › `Slider.Range` · `Slider.Thumb` (un par valeur) · optionnellement `Slider.Tick`, `Slider.TickLabel`, `Slider.ThumbLabel`.\n\n**Accessibilité** : flèches (pas), Page préc./suiv. (grand pas), Début/Fin. Donnez un `aria-label` à chaque `Thumb`."
				}
			}
		},
		argTypes: {
			type: {
				control: 'inline-radio',
				options: ['single', 'multiple'],
				description:
					'`single` : une valeur (number) ; `multiple` : plusieurs poignées (number[]), ex. une plage.',
				table: {
					category: 'Props'
				}
			},
			value: {
				description: 'Valeur(s). Utilisable avec `bind:value`.',
				table: {
					type: {
						summary: 'number | number[]'
					},
					category: 'Props'
				}
			},
			min: {
				control: 'number',
				description: 'Valeur minimale.',
				table: {
					defaultValue: {
						summary: '0'
					},
					category: 'Props'
				}
			},
			max: {
				control: 'number',
				description: 'Valeur maximale.',
				table: {
					defaultValue: {
						summary: '100'
					},
					category: 'Props'
				}
			},
			step: {
				control: 'number',
				description: 'Pas entre deux valeurs.',
				table: {
					defaultValue: {
						summary: '1'
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
		args: { type: 'single' }
	});
</script>

<Story name="Default" args={{ type: 'single', value: 50, class: 'w-[300px]' }}>
	<Slider.Range />
	<Slider.Thumb index={0} />
</Story>

<Story name="Disabled" args={{ type: 'single', value: 30, disabled: true, class: 'w-[300px]' }}>
	<Slider.Range />
	<Slider.Thumb index={0} />
</Story>

<Story name="Range" args={{ type: 'multiple', value: [20, 80], class: 'w-[300px]' }}>
	<Slider.Range />
	<Slider.Thumb index={0} />
	<Slider.Thumb index={1} />
</Story>

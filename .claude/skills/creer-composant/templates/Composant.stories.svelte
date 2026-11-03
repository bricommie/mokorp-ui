<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, within } from 'storybook/test';
	import Composant from '#lib/components/Composant.svelte';
	// Multi-parties : import * as Composant from '#lib/components/composant/index.js';
	// et `component: Composant.Root`.

	const { Story } = defineMeta({
		// Familles : Actions, Formulaires, Dates et heures, Superpositions,
		// Navigation, Données et retours, Mise en page.
		title: 'Composants/FAMILLE/Composant',
		component: Composant,
		parameters: {
			docs: {
				description: {
					// 1. Quand l'utiliser  2. Anatomie (multi-parties)  3. Accessibilité
					component:
						"‹Quand l'utiliser, et quand préférer autre chose.›\n\n**Accessibilité** : ‹ce que le consommateur doit fournir.›"
				}
			}
		},
		argTypes: {
			variant: {
				control: 'select',
				options: ['primary', 'secondary'],
				description: '‹Ce que change la prop, en français.›',
				// Catégorie OBLIGATOIRE (Props, Événements, Snippets, Svelte) :
				// sans elle, un attribut natif est masqué de la table (preview.ts).
				table: { category: 'Props', defaultValue: { summary: "'primary'" } }
			},
			disabled: {
				control: 'boolean',
				description: '‹Effet de la désactivation (focus, clics).›',
				table: { category: 'Props', defaultValue: { summary: 'false' } }
			}
		},
		args: {
			variant: 'primary',
			disabled: false
		}
	});
</script>

<!-- Pilotée par les args : c'est elle qui alimente les Controls. -->
<Story name="Default">Contenu</Story>

<!-- Une story par état ou variante visible, nommée par état. -->
<Story name="Secondary" args={{ variant: 'secondary' }}>Contenu</Story>
<Story name="Disabled" args={{ disabled: true }}>Contenu</Story>

<!-- Le comportement clé, prouvé : clavier, ARIA, valeur. Tourne aussi dans Vitest. -->
<Story
	name="Keyboard"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.tab();
		await expect(canvas.getByText('Contenu')).toBeInTheDocument();
	}}
>
	Contenu
</Story>

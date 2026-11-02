<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Skeleton from '#lib/components/Skeleton.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Données et retours/Skeleton',
		component: Skeleton,
		parameters: {
			docs: {
				description: {
					component:
						'Gabarit de **chargement** qui réserve la place du contenu à venir (évite les sauts de mise en page). Sa forme vient de `class` (taille, rayon).\n\n**Accessibilité** : décoratif ; signalez le chargement sur le conteneur avec `aria-busy="true"`.'
				}
			}
		},
		argTypes: {
			class: {
				control: 'text',
				description: 'Dimensions et forme du gabarit, ex. `h-4 w-48` ou `size-12 rounded-pill`.',
				table: {
					category: 'Svelte'
				}
			}
		}
	});
</script>

<Story name="Default" args={{ class: 'h-4 w-64' }} />
<Story name="Avatar" args={{ class: 'size-12 rounded-full' }} />

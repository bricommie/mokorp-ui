<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Badge from '#lib/components/Badge.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Données et retours/Badge',
		component: Badge,
		parameters: {
			docs: {
				description: {
					component:
						'Étiquette courte de **statut** ou de catégorie (« Publié », « Bêta »). Non interactif : pour une action, utilisez `Button`.\n\n**Accessibilité** : le texte porte le sens, pas la couleur seule (« Échec », pas un badge rouge vide).'
				}
			}
		},
		argTypes: {
			variant: {
				control: 'select',
				options: ['primary', 'secondary', 'outline', 'success', 'warning', 'destructive'],
				description:
					'Intention du badge. `success` / `warning` / `destructive` pour un statut ; `outline` pour une catégorie neutre.',
				table: {
					defaultValue: {
						summary: "'primary'"
					},
					category: 'Props'
				}
			}
		},
		args: {
			variant: 'primary'
		}
	});
</script>

<Story name="Primary" args={{ variant: 'primary' }}>New</Story>
<Story name="Secondary" args={{ variant: 'secondary' }}>Beta</Story>
<Story name="Outline" args={{ variant: 'outline' }}>Draft</Story>
<Story name="Success" args={{ variant: 'success' }}>Reçu</Story>
<Story name="Warning" args={{ variant: 'warning' }}>En attente</Story>
<Story name="Destructive" args={{ variant: 'destructive' }}>Error</Story>

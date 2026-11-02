<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as LinkPreview from '#lib/components/link-preview/index.js';
	import { Root } from '#lib/components/link-preview/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Superpositions/LinkPreview',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Aperçu du contenu d'un **lien** au survol (profil, article). Purement complémentaire : le lien doit suffire seul, l'aperçu n'est pas accessible au tactile.\n\n**Anatomie** : `LinkPreview.Root` › `Trigger` (le lien) ; `Portal` › `Content` (+ `Arrow`)."
				}
			}
		},
		argTypes: {
			open: {
				control: 'boolean',
				description: "Ouverture de l'aperçu. Utilisable avec `bind:open`.",
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
			openDelay: {
				control: 'number',
				description: 'Délai avant ouverture, en ms.',
				table: {
					defaultValue: {
						summary: '700'
					},
					category: 'Props'
				}
			},
			closeDelay: {
				control: 'number',
				description: 'Délai avant fermeture, en ms.',
				table: {
					defaultValue: {
						summary: '300'
					},
					category: 'Props'
				}
			}
		},
		args: {}
	});
</script>

<Story name="Default">
	<LinkPreview.Trigger>Survole ce lien</LinkPreview.Trigger>
	<LinkPreview.Content>Un aperçu flottant du lien, structurel à coins nets.</LinkPreview.Content>
</Story>

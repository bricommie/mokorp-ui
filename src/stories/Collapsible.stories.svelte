<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Collapsible from '#lib/components/collapsible/index.js';
	import { Root } from '#lib/components/collapsible/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Navigation/Collapsible',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'**Un** bloc repliable isolé (« Afficher plus »). Pour une liste de sections, utilisez `Accordion`.\n\n**Anatomie** : `Collapsible.Root` › `Collapsible.Trigger` · `Collapsible.Content`.'
				}
			}
		},
		argTypes: {
			open: {
				control: 'boolean',
				description: 'Bloc déplié. Utilisable avec `bind:open`.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			onOpenChange: {
				description: "Appelé quand l'état change.",
				table: {
					type: {
						summary: '(open: boolean) => void'
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
			open: false
		}
	});
</script>

<Story name="Default" args={{ open: true }}>
	<Collapsible.Trigger>Déplier / replier</Collapsible.Trigger>
	<Collapsible.Content>
		Contenu repliable affiché dans un panneau structurel à coins nets.
	</Collapsible.Content>
</Story>

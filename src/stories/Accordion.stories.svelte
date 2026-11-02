<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Accordion from '#lib/components/accordion/index.js';
	import { Root } from '#lib/components/accordion/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Navigation/Accordion',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Sections **repliables** empilées : FAQ, réglages avancés. Ne cachez pas dans un accordéon une information que tout le monde doit lire.\n\n**Anatomie** : `Accordion.Root` › `Accordion.Item` › `Accordion.Header` › `Accordion.Trigger` (chevron intégré) ; `Accordion.Content`.\n\n**Accessibilité** : le déclencheur est un bouton avec `aria-expanded`, dans un titre (`Header`). Ouverture animée (hauteur), neutralisée en mouvement réduit.'
				}
			}
		},
		argTypes: {
			type: {
				control: 'inline-radio',
				options: ['single', 'multiple'],
				description: '`single` : une section ouverte à la fois ; `multiple` : plusieurs.',
				table: {
					category: 'Props'
				}
			},
			value: {
				description: 'Section(s) ouverte(s). Utilisable avec `bind:value`.',
				table: {
					type: {
						summary: 'string | string[]'
					},
					category: 'Props'
				}
			},
			onValueChange: {
				description: "Appelé quand l'ouverture change.",
				table: {
					type: {
						summary: '(value) => void'
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
			type: 'single'
		}
	});
</script>

<Story name="Default" args={{ type: 'single', value: 'item-1' }}>
	<Accordion.Item value="item-1">
		<Accordion.Header>
			<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Header>
			<Accordion.Trigger>Is it styled?</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>Yes. It follows the Acid Terminal design system.</Accordion.Content>
	</Accordion.Item>
</Story>

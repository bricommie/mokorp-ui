<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as NavigationMenu from '#lib/components/navigation-menu/index.js';
	import { Root } from '#lib/components/navigation-menu/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Navigation/NavigationMenu',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Menu de navigation de site avec **panneaux déroulants** (méga-menu). Pour une simple liste de liens, préférez `Navbar`.\n\n**Anatomie** : `NavigationMenu.Root` › `List` › `Item` › `Trigger` + `Content` (ou `Link`) ; `Indicator` · `Viewport`.\n\n**Accessibilité** : landmark `<nav>`, flèches entre les entrées, Échap ferme le panneau.'
				}
			}
		},
		argTypes: {
			value: {
				control: 'text',
				description: 'Entrée ouverte. Utilisable avec `bind:value`.',
				table: {
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
			delayDuration: {
				control: 'number',
				description: "Délai d'ouverture au survol, en ms.",
				table: {
					defaultValue: {
						summary: '200'
					},
					category: 'Props'
				}
			}
		}
	});
</script>

<Story name="Default">
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Premier</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<NavigationMenu.Link href="#">Lien 1</NavigationMenu.Link>
				<NavigationMenu.Link href="#">Lien 2</NavigationMenu.Link>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Second</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<NavigationMenu.Link href="#">Lien 3</NavigationMenu.Link>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href="#">Direct</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
	<NavigationMenu.Viewport>
		<NavigationMenu.Indicator>
			<div class="relative top-[60%] h-2 w-2 rotate-45 bg-border shadow-md"></div>
		</NavigationMenu.Indicator>
	</NavigationMenu.Viewport>
</Story>

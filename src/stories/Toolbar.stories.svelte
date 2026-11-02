<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Toolbar from '#lib/components/toolbar/index.js';
	import { Root } from '#lib/components/toolbar/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Actions/Toolbar',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Barre d'outils regroupant des boutons, liens et groupes de bascules liés à un même contenu (éditeur, tableau).\n\n**Anatomie** : `Toolbar.Root` › `Toolbar.Button` · `Toolbar.Link` · `Toolbar.Group` › `Toolbar.GroupItem`.\n\n**Accessibilité** : un seul arrêt de tabulation pour toute la barre, flèches pour se déplacer. Donnez un `aria-label` au Root (« Mise en forme »)."
				}
			}
		},
		argTypes: {
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
			}
		},
		args: {}
	});
</script>

<Story name="Default">
	<Toolbar.Button>Copier</Toolbar.Button>
	<Toolbar.Link href="#">Aide</Toolbar.Link>
	<Toolbar.Group type="multiple">
		<Toolbar.GroupItem value="bold">Gras</Toolbar.GroupItem>
		<Toolbar.GroupItem value="italic">Italique</Toolbar.GroupItem>
	</Toolbar.Group>
</Story>

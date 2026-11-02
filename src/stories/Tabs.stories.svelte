<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Tabs from '#lib/components/tabs/index.js';
	import { Root } from '#lib/components/tabs/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Navigation/Tabs',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Onglets : basculer entre des **vues sœurs** d'un même contenu sans changer de page. Pour naviguer entre pages, utilisez des liens.\n\n**Anatomie** : `Tabs.Root` › `Tabs.List` › `Tabs.Trigger` (un par onglet) ; `Tabs.Content` (un par panneau, même `value`).\n\n**Accessibilité** : rôles `tablist` / `tab` / `tabpanel`, flèches entre les onglets."
				}
			}
		},
		argTypes: {
			value: {
				control: 'text',
				description: 'Onglet actif. Utilisable avec `bind:value`.',
				table: {
					category: 'Props'
				}
			},
			onValueChange: {
				description: "Appelé quand l'onglet change.",
				table: {
					type: {
						summary: '(value: string) => void'
					},
					category: 'Événements'
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
			activationMode: {
				control: 'inline-radio',
				options: ['automatic', 'manual'],
				description:
					"`automatic` : la flèche active l'onglet ; `manual` : la flèche déplace le focus, Entrée active (contenus lourds).",
				table: {
					defaultValue: {
						summary: "'automatic'"
					},
					category: 'Props'
				}
			}
		},
		args: {
			value: 'account'
		}
	});
</script>

<Story name="Default" args={{ value: 'account' }}>
	<Tabs.List>
		<Tabs.Trigger value="account">Compte</Tabs.Trigger>
		<Tabs.Trigger value="password">Mot de passe</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="account">Contenu de l'onglet « Compte ».</Tabs.Content>
	<Tabs.Content value="password">Contenu de l'onglet « Mot de passe ».</Tabs.Content>
</Story>

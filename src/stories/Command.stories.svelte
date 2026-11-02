<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Command from '#lib/components/command/index.js';
	import { Root } from '#lib/components/command/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Superpositions/Command',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Palette de **commandes** avec recherche intégrée (⌘K) : naviguer, lancer une action. Le filtrage est fait par le composant.\n\n**Anatomie** : `Command.Root` › `Command.Input` · `Command.List` › `Command.Empty` · `Command.Group` › `GroupHeading` + `GroupItems` › `Command.Item` · `Command.Separator`.\n\nPour l'afficher en modale, placez-la dans un `Dialog.Content`."
				}
			}
		},
		argTypes: {
			label: {
				control: 'text',
				description: 'Nom accessible de la palette.',
				table: {
					category: 'Props'
				}
			},
			shouldFilter: {
				control: 'boolean',
				description:
					'Filtrage automatique des items selon la saisie. `false` pour filtrer vous-même (résultats serveur).',
				table: {
					defaultValue: {
						summary: 'true'
					},
					category: 'Props'
				}
			},
			loop: {
				control: 'boolean',
				description: 'Les flèches bouclent en fin de liste.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			}
		}
	});
</script>

<Story name="Default">
	<Command.Input placeholder="Taper une commande..." />
	<Command.List>
		<Command.Empty>Aucun résultat.</Command.Empty>
		<Command.Group>
			<Command.GroupHeading>Suggestions</Command.GroupHeading>
			<Command.GroupItems>
				<Command.Item value="calendar">Calendrier</Command.Item>
				<Command.Item value="search">Recherche</Command.Item>
			</Command.GroupItems>
		</Command.Group>
		<Command.Separator />
		<Command.Group>
			<Command.GroupHeading>Paramètres</Command.GroupHeading>
			<Command.GroupItems>
				<Command.Item value="profile">Profil</Command.Item>
				<Command.Item value="settings">Réglages</Command.Item>
			</Command.GroupItems>
		</Command.Group>
	</Command.List>
</Story>

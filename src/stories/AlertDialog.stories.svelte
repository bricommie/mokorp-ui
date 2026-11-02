<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as AlertDialog from '#lib/components/alert-dialog/index.js';
	import { Root } from '#lib/components/alert-dialog/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Superpositions/AlertDialog',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Dialogue de **confirmation** d'une action importante ou irréversible (« Supprimer le projet ? »). Contrairement à `Dialog`, il ne se ferme **pas** au clic extérieur : l'utilisateur doit choisir.\n\n**Anatomie** : `AlertDialog.Root` › `AlertDialog.Trigger` ; `AlertDialog.Portal` › `AlertDialog.Overlay` + `AlertDialog.Content` › `AlertDialog.Header` (`Title` · `Description`) · contenu · `AlertDialog.Footer` › `AlertDialog.Cancel` · `AlertDialog.Action`.\n\n**Accessibilité** : rôle `alertdialog`. Le focus initial va sur `Cancel` (l'option sûre). Le libellé de `Action` nomme l'action (« Supprimer »), jamais « OK »."
				}
			}
		},
		argTypes: {
			open: {
				control: 'boolean',
				description: 'Ouverture du dialogue. Utilisable avec `bind:open`.',
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
			}
		},
		args: {
			open: true
		}
	});
</script>

<Story name="Default" args={{ open: true }}>
	<AlertDialog.Trigger>Ouvrir l'alert-dialog</AlertDialog.Trigger>
	<AlertDialog.Portal>
		<AlertDialog.Overlay />
		<AlertDialog.Content>
			<AlertDialog.Title>Supprimer ?</AlertDialog.Title>
			<AlertDialog.Description>Cette action est définitive.</AlertDialog.Description>
			<AlertDialog.Cancel>Annuler</AlertDialog.Cancel>
			<AlertDialog.Action>Supprimer</AlertDialog.Action>
		</AlertDialog.Content>
	</AlertDialog.Portal>
</Story>

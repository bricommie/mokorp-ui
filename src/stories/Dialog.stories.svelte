<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Dialog from '#lib/components/dialog/index.js';
	import { Root } from '#lib/components/dialog/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Superpositions/Dialog',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Fenêtre **modale** pour une tâche courte qui interrompt le flux (éditer un profil, confirmer des paramètres). Pour une action destructive, utilisez `AlertDialog`.\n\n**Anatomie** : `Dialog.Root` › `Dialog.Trigger` ; `Dialog.Portal` › `Dialog.Overlay` + `Dialog.Content` › `Dialog.Header` (`Title` · `Description`) · contenu · `Dialog.Footer` (+ `Dialog.Close`).\n\n**Accessibilité** : `Dialog.Title` est **obligatoire** (nom du dialogue). Le focus est piégé à l'intérieur puis rendu au déclencheur ; Échap et le clic extérieur ferment."
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
	<Dialog.Trigger>Ouvrir le dialog</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay />
		<Dialog.Content>
			<Dialog.Title>Êtes-vous sûr ?</Dialog.Title>
			<Dialog.Description>Cette action est irréversible.</Dialog.Description>
			<Dialog.Close>Fermer</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Story>

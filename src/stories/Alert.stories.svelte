<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Alert from '#lib/components/Alert.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Données et retours/Alert',
		component: Alert,
		parameters: {
			docs: {
				description: {
					component:
						"Message **contextuel** posé dans la page : résultat d'une action, avertissement, erreur. Pour une confirmation bloquante, utilisez `AlertDialog`.\n\nContenu libre (titre + texte) ; un snippet `icon` optionnel s'affiche à gauche.\n\n**Accessibilité** : rôle `alert` (annoncé immédiatement) ; ne l'utilisez que pour un message qui mérite d'interrompre le lecteur d'écran."
				}
			}
		},
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'success', 'warning', 'destructive'],
				description: 'Intention du message.',
				table: {
					defaultValue: {
						summary: "'default'"
					},
					category: 'Props'
				}
			},
			icon: {
				description: 'Snippet : icône affichée à gauche du contenu.',
				table: {
					type: {
						summary: 'Snippet'
					},
					category: 'Snippets'
				}
			}
		}
	});
</script>

<Story name="Default" asChild>
	<Alert class="w-96">
		<p class="font-display text-lg font-bold leading-tight">Déploiement terminé</p>
		<p>La version est servie à 100 % du trafic.</p>
	</Alert>
</Story>
<Story name="Success" asChild>
	<Alert variant="success" class="w-96">
		<p class="font-display text-lg font-bold leading-tight">Virement envoyé</p>
		<p>Rei a reçu 42,00 € à 20:41.</p>
	</Alert>
</Story>
<Story name="Warning" asChild>
	<Alert variant="warning" class="w-96">
		<p class="font-display text-lg font-bold leading-tight">Plafond bientôt atteint</p>
		<p>Il reste 458,00 € disponibles aujourd’hui.</p>
	</Alert>
</Story>
<Story name="Destructive" asChild>
	<Alert variant="destructive" class="w-96">
		<p class="font-display text-lg font-bold leading-tight">Le build a échoué</p>
		<p>Corrigez l’import puis relancez.</p>
	</Alert>
</Story>

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Card from '#lib/components/Card.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Mise en page/Card',
		component: Card,
		parameters: {
			docs: {
				description: {
					component:
						"Surface qui regroupe un contenu autonome (résumé, formulaire court).\n\n**Anatomie** (optionnelle) : `Card` › `CardHeader` (`CardTitle` · `CardDescription`) · `CardContent` · `CardFooter`.\n\nUne carte n'est pas cliquable en entier : placez un lien ou un bouton explicite à l'intérieur."
				}
			}
		}
	});
</script>

<Story name="Default">
	<div class="p-4">
		<p class="font-display text-lg font-bold">Card title</p>
		<p class="mt-1 text-sm">Contenu de la carte, en sémantique.</p>
	</div>
</Story>

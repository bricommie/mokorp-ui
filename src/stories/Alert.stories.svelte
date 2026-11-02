<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Alert from '#lib/components/Alert.svelte';

	const { Story } = defineMeta({
		title: 'Components/Alert',
		component: Alert
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

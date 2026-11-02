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
<Story name="Destructive" asChild>
	<Alert variant="destructive" class="w-96">
		<p class="font-display text-lg font-bold leading-tight">Le build a échoué</p>
		<p>Corrigez l’import puis relancez.</p>
	</Alert>
</Story>

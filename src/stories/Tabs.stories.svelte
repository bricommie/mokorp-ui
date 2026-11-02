<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Tabs from '#lib/components/tabs/index.js';
	import { Root } from '#lib/components/tabs/index.js';

	const { Story } = defineMeta({
		title: 'Components/Tabs',
		component: Root,
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

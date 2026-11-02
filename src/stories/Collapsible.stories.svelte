<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Collapsible from '#lib/components/collapsible/index.js';
	import { Root } from '#lib/components/collapsible/index.js';

	const { Story } = defineMeta({
		title: 'Components/Collapsible',
		component: Root,
		args: {
			open: false
		}
	});
</script>

<Story name="Default" args={{ open: true }}>
	<Collapsible.Trigger>Déplier / replier</Collapsible.Trigger>
	<Collapsible.Content>
		Contenu repliable affiché dans un panneau structurel à coins nets.
	</Collapsible.Content>
</Story>

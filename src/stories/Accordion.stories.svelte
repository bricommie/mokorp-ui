<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Accordion from '#lib/components/accordion/index.js';
	import { Root } from '#lib/components/accordion/index.js';

	const { Story } = defineMeta({
		title: 'Components/Accordion',
		component: Root,
		args: {
			type: 'single'
		}
	});
</script>

<Story name="Default" args={{ type: 'single', value: 'item-1' }}>
	<Accordion.Item value="item-1">
		<Accordion.Header>
			<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Header>
			<Accordion.Trigger>Is it styled?</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>Yes. It follows the Acid Terminal design system.</Accordion.Content>
	</Accordion.Item>
</Story>

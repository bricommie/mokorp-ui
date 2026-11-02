<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Combobox from '#lib/components/combobox/index.js';
	import { Root } from '#lib/components/combobox/index.js';

	const { Story } = defineMeta({
		title: 'Components/Combobox',
		component: Root,
		args: {
			type: 'single'
		}
	});
</script>

<Story name="Default" args={{ type: 'single', value: 'apple' }}>
	<Combobox.Input placeholder="Rechercher un fruit..." />
	<Combobox.Trigger></Combobox.Trigger>
	<Combobox.Portal>
		<Combobox.Content>
			<Combobox.Item value="apple" label="Pomme" />
			<Combobox.Item value="banana" label="Banane" />
			<Combobox.Item value="cherry" label="Cerise" />
		</Combobox.Content>
	</Combobox.Portal>
</Story>

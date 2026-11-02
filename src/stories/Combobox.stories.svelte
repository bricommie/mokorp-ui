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
	<Combobox.Trigger>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="h-4 w-4"
			><path d="m6 9 6 6 6-6"></path></svg
		>
	</Combobox.Trigger>
	<Combobox.Portal>
		<Combobox.Content>
			<Combobox.Item value="apple" label="Pomme" />
			<Combobox.Item value="banana" label="Banane" />
			<Combobox.Item value="cherry" label="Cerise" />
		</Combobox.Content>
	</Combobox.Portal>
</Story>

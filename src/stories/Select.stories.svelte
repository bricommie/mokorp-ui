<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Select from '#lib/components/select/index.js';
	import { Root } from '#lib/components/select/index.js';

	const { Story } = defineMeta({
		title: 'Components/Select',
		component: Root,
		args: {
			type: 'single'
		}
	});
</script>

<Story name="Default" args={{ type: 'single', value: 'apple' }}>
	<Select.Trigger>
		<Select.Value placeholder="Choisir un fruit" />
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
			class="h-4 w-4 opacity-50"
			><path d="m6 9 6 6 6-6"></path></svg
		>
	</Select.Trigger>
	<Select.Portal>
		<Select.Content>
			<Select.Group>
				<Select.GroupHeading>Fruits</Select.GroupHeading>
				<Select.Item value="apple" label="Pomme" />
				<Select.Item value="banana" label="Banane" />
				<Select.Item value="cherry" label="Cerise" />
			</Select.Group>
		</Select.Content>
	</Select.Portal>
</Story>

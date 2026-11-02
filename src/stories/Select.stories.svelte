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

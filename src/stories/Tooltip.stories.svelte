<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Tooltip from '#lib/components/tooltip/index.js';
	import { Root } from '#lib/components/tooltip/index.js';

	const { Story } = defineMeta({
		title: 'Components/Tooltip',
		component: Root,
		args: {}
	});
</script>

<Story name="Default" asChild>
	<Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>Survole-moi</Tooltip.Trigger>
			<Tooltip.Content>Une infobulle d'aide, structurelle à coins nets.</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</Story>

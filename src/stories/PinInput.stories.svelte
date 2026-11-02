<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as PinInput from '#lib/components/pin-input/index.js';
	import { Root } from '#lib/components/pin-input/index.js';

	const { Story } = defineMeta({
		title: 'Components/PinInput',
		component: Root,
		args: {
			maxlength: 4
		}
	});
</script>

<Story name="Default" asChild>
	<PinInput.Root maxlength={4}>
		{#snippet children({ cells })}
			{#each cells as cell}
				<PinInput.Cell {cell}>{cell.char}</PinInput.Cell>
			{/each}
		{/snippet}
	</PinInput.Root>
</Story>

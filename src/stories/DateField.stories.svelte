<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DateField from '#lib/components/date-field/index.js';
	import { Root } from '#lib/components/date-field/index.js';

	const { Story } = defineMeta({
		title: 'Components/DateField',
		component: Root
	});
</script>

<script lang="ts">
	import { CalendarDate, type DateValue } from '@internationalized/date';
	import type { SegmentPart } from 'bits-ui';

	let value = $state<DateValue | undefined>(new CalendarDate(2025, 2, 14));
</script>

<Story name="Default" args={{ value }}>
	<DateField.Label>Date de naissance</DateField.Label>
	<DateField.Input>
		{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<DateField.Segment {part}>{value}</DateField.Segment>
			{/each}
		{/snippet}
	</DateField.Input>
</Story>

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DateRangeField from '#lib/components/date-range-field/index.js';
	import { Root } from '#lib/components/date-range-field/index.js';

	const { Story } = defineMeta({
		title: 'Components/DateRangeField',
		component: Root
	});
</script>

<script lang="ts">
	import { CalendarDate, type DateValue } from '@internationalized/date';
	import type { SegmentPart } from 'bits-ui';

	let value = $state<{ start: DateValue | undefined; end: DateValue | undefined }>({
		start: new CalendarDate(2025, 2, 10),
		end: new CalendarDate(2025, 2, 20)
	});
</script>

<Story name="Default" args={{ value }}>
	<DateRangeField.Label>Période de séjour</DateRangeField.Label>
	<DateRangeField.Input type="start">
		{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<DateRangeField.Segment {part}>{value}</DateRangeField.Segment>
			{/each}
		{/snippet}
	</DateRangeField.Input>
	<DateRangeField.Input type="end">
		{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<DateRangeField.Segment {part}>{value}</DateRangeField.Segment>
			{/each}
		{/snippet}
	</DateRangeField.Input>
</Story>

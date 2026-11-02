<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as TimeRangeField from '#lib/components/time-range-field/index.js';
	import { Root } from '#lib/components/time-range-field/index.js';

	const { Story } = defineMeta({
		title: 'Components/TimeRangeField',
		component: Root
	});
</script>

<script lang="ts">
	import { Time } from '@internationalized/date';
	import type { TimeSegmentPart } from 'bits-ui';

	let value = $state<{ start: Time | undefined; end: Time | undefined }>({
		start: new Time(9, 0),
		end: new Time(17, 30)
	});
</script>

<Story name="Default" args={{ value }}>
	<TimeRangeField.Label>Horaires d'ouverture</TimeRangeField.Label>
	<TimeRangeField.Input type="start">
		{#snippet children({ segments }: { segments: { part: TimeSegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
			{/each}
		{/snippet}
	</TimeRangeField.Input>
	<TimeRangeField.Input type="end">
		{#snippet children({ segments }: { segments: { part: TimeSegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
			{/each}
		{/snippet}
	</TimeRangeField.Input>
</Story>

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as TimeField from '#lib/components/time-field/index.js';
	import { Root } from '#lib/components/time-field/index.js';

	const { Story } = defineMeta({
		title: 'Components/TimeField',
		component: Root
	});
</script>

<script lang="ts">
	import { Time } from '@internationalized/date';
	import type { TimeSegmentPart } from 'bits-ui';

	let value = $state<Time | undefined>(new Time(12, 30));
</script>

<Story name="Default" args={{ value }}>
	<TimeField.Label>Heure du rendez-vous</TimeField.Label>
	<TimeField.Input>
		{#snippet children({ segments }: { segments: { part: TimeSegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<TimeField.Segment {part}>{value}</TimeField.Segment>
			{/each}
		{/snippet}
	</TimeField.Input>
</Story>

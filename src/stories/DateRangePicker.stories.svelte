<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DateRangePicker from '#lib/components/date-range-picker/index.js';
	import { Root } from '#lib/components/date-range-picker/index.js';

	const { Story } = defineMeta({
		title: 'Components/DateRangePicker',
		component: Root
	});
</script>

<script lang="ts">
	import { CalendarDate, type DateValue } from '@internationalized/date';
	import type { Month, SegmentPart } from 'bits-ui';

	let value = $state<{ start: DateValue | undefined; end: DateValue | undefined }>({
		start: new CalendarDate(2025, 2, 10),
		end: new CalendarDate(2025, 2, 20)
	});
</script>

<Story name="Default" args={{ value }}>
	<DateRangePicker.Label>Période</DateRangePicker.Label>
	<DateRangePicker.Input type="start">
		{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<DateRangePicker.Segment {part}>{value}</DateRangePicker.Segment>
			{/each}
		{/snippet}
	</DateRangePicker.Input>
	<DateRangePicker.Input type="end">
		{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<DateRangePicker.Segment {part}>{value}</DateRangePicker.Segment>
			{/each}
		{/snippet}
	</DateRangePicker.Input>
	<DateRangePicker.Trigger>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="size-4"
			aria-hidden="true"
		>
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
		</svg>
	</DateRangePicker.Trigger>
	<DateRangePicker.Content>
		<DateRangePicker.Calendar>
			{#snippet children({ months, weekdays }: { months: Month<DateValue>[]; weekdays: string[] })}
				<DateRangePicker.Header>
					<DateRangePicker.PrevButton>←</DateRangePicker.PrevButton>
					<DateRangePicker.Heading />
					<DateRangePicker.NextButton>→</DateRangePicker.NextButton>
				</DateRangePicker.Header>
				{#each months as month}
					<DateRangePicker.Grid>
						<DateRangePicker.GridHead>
							<DateRangePicker.GridRow>
								{#each weekdays as day}
									<DateRangePicker.HeadCell>{day}</DateRangePicker.HeadCell>
								{/each}
							</DateRangePicker.GridRow>
						</DateRangePicker.GridHead>
						<DateRangePicker.GridBody>
							{#each month.weeks as weekDates}
								<DateRangePicker.GridRow>
									{#each weekDates as date}
										<DateRangePicker.Cell date={date} month={month.value}>
											<DateRangePicker.Day />
										</DateRangePicker.Cell>
									{/each}
								</DateRangePicker.GridRow>
							{/each}
						</DateRangePicker.GridBody>
					</DateRangePicker.Grid>
				{/each}
			{/snippet}
		</DateRangePicker.Calendar>
	</DateRangePicker.Content>
</Story>

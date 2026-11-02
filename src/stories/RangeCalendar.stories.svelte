<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as RangeCalendar from '#lib/components/range-calendar/index.js';
	import { Root } from '#lib/components/range-calendar/index.js';

	const { Story } = defineMeta({
		title: 'Components/RangeCalendar',
		component: Root
	});
</script>

<script lang="ts">
	import { CalendarDate, type DateValue } from '@internationalized/date';
	import type { Month } from 'bits-ui';

	let value = $state<{ start: DateValue | undefined; end: DateValue | undefined }>({
		start: new CalendarDate(2025, 2, 10),
		end: new CalendarDate(2025, 2, 20)
	});
</script>

<Story name="Default" asChild>
	<RangeCalendar.Root {value}>
		{#snippet children({ months, weekdays }: { months: Month<DateValue>[]; weekdays: string[] })}
			<RangeCalendar.Header>
				<RangeCalendar.PrevButton />
				<RangeCalendar.Heading />
				<RangeCalendar.NextButton />
			</RangeCalendar.Header>
			{#each months as month}
				<RangeCalendar.Grid>
					<RangeCalendar.GridHead>
						<RangeCalendar.GridRow>
							{#each weekdays as day}
								<RangeCalendar.HeadCell>{day}</RangeCalendar.HeadCell>
							{/each}
						</RangeCalendar.GridRow>
					</RangeCalendar.GridHead>
					<RangeCalendar.GridBody>
						{#each month.weeks as weekDates}
							<RangeCalendar.GridRow>
								{#each weekDates as date}
									<RangeCalendar.Cell {date} month={month.value}>
										<RangeCalendar.Day />
									</RangeCalendar.Cell>
								{/each}
							</RangeCalendar.GridRow>
						{/each}
					</RangeCalendar.GridBody>
				</RangeCalendar.Grid>
			{/each}
		{/snippet}
	</RangeCalendar.Root>
</Story>

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Calendar from '#lib/components/calendar/index.js';
	import { Root } from '#lib/components/calendar/index.js';

	const { Story } = defineMeta({
		title: 'Components/Calendar',
		component: Root
	});
</script>

<script lang="ts">
	import { CalendarDate, type DateValue } from '@internationalized/date';
	import type { Month } from 'bits-ui';

	let value = $state<DateValue | undefined>(new CalendarDate(2025, 2, 14));
</script>

<Story name="Default" asChild>
	<Calendar.Root type="single" {value}>
		{#snippet children({ months, weekdays }: { months: Month<DateValue>[]; weekdays: string[] })}
			<Calendar.Header>
				<Calendar.PrevButton />
				<Calendar.Heading />
				<Calendar.NextButton />
			</Calendar.Header>
			{#each months as month}
				<Calendar.Grid>
					<Calendar.GridHead>
						<Calendar.GridRow>
							{#each weekdays as day}
								<Calendar.HeadCell>{day}</Calendar.HeadCell>
							{/each}
						</Calendar.GridRow>
					</Calendar.GridHead>
					<Calendar.GridBody>
						{#each month.weeks as weekDates}
							<Calendar.GridRow>
								{#each weekDates as date}
									<Calendar.Cell {date} month={month.value}>
										<Calendar.Day />
									</Calendar.Cell>
								{/each}
							</Calendar.GridRow>
						{/each}
					</Calendar.GridBody>
				</Calendar.Grid>
			{/each}
		{/snippet}
	</Calendar.Root>
</Story>

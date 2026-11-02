<script lang="ts">
	import type { DateValue } from '@internationalized/date';
	import type { Month } from 'bits-ui';
	import { cn } from '../cn.js';
	import * as RangeCalendar from './range-calendar/index.js';

	type DateRange = { start: DateValue | undefined; end: DateValue | undefined };

	type Props = {
		value?: DateRange;
		placeholder?: DateValue | undefined;
		locale?: string;
		class?: string;
		disabled?: boolean;
		readonly?: boolean;
		fixedWeeks?: boolean;
		numberOfMonths?: number;
		minValue?: DateValue;
		maxValue?: DateValue;
		isDateDisabled?: (date: DateValue) => boolean;
		isDateUnavailable?: (date: DateValue) => boolean;
		onValueChange?: (value: DateRange) => void;
	};

	let {
		value = $bindable(),
		placeholder = $bindable(),
		locale = 'fr-FR',
		class: className,
		...rest
	}: Props = $props();
</script>

<!-- Calendrier de plage prêt à l'emploi : début/fin = primary, milieu = muted — §7 -->
<RangeCalendar.Root
	weekdayFormat="short"
	bind:value
	bind:placeholder
	{locale}
	{...rest}
	class={cn('inline-block border-2 border-border bg-card p-3 text-card-foreground', className)}
>
	{#snippet children({ months, weekdays }: { months: Month<DateValue>[]; weekdays: string[] })}
		<RangeCalendar.Header class="mb-2">
			<RangeCalendar.PrevButton />
			<RangeCalendar.Heading />
			<RangeCalendar.NextButton />
		</RangeCalendar.Header>
		{#each months as month (month.value.toString())}
			<RangeCalendar.Grid>
				<RangeCalendar.GridHead>
					<RangeCalendar.GridRow>
						{#each weekdays as day, d (d)}<RangeCalendar.HeadCell
								>{day.slice(0, 2)}</RangeCalendar.HeadCell
							>{/each}
					</RangeCalendar.GridRow>
				</RangeCalendar.GridHead>
				<RangeCalendar.GridBody>
					{#each month.weeks as weekDates, i (i)}
						<RangeCalendar.GridRow>
							{#each weekDates as date (date.toString())}
								<RangeCalendar.Cell {date} month={month.value}
									><RangeCalendar.Day /></RangeCalendar.Cell
								>
							{/each}
						</RangeCalendar.GridRow>
					{/each}
				</RangeCalendar.GridBody>
			</RangeCalendar.Grid>
		{/each}
	{/snippet}
</RangeCalendar.Root>

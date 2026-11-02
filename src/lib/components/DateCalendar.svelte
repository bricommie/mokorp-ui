<script lang="ts">
	import type { DateValue } from '@internationalized/date';
	import type { Month } from 'bits-ui';
	import { cn } from '../cn.js';
	import * as Calendar from './calendar/index.js';

	type Props = {
		value?: DateValue | undefined;
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
		onValueChange?: (value: DateValue | undefined) => void;
	};

	let {
		value = $bindable(),
		placeholder = $bindable(),
		locale = 'fr-FR',
		class: className,
		...rest
	}: Props = $props();
</script>

<!-- Calendrier mensuel prêt à l'emploi (sélection simple) : en-tête, grille, jours — §7 -->
<Calendar.Root
	type="single"
	weekdayFormat="short"
	bind:value
	bind:placeholder
	{locale}
	{...rest}
	class={cn(
		'rounded-surface inline-block border-(length:--border-width) border-border-subtle bg-card p-3 text-card-foreground',
		className
	)}
>
	{#snippet children({ months, weekdays }: { months: Month<DateValue>[]; weekdays: string[] })}
		<Calendar.Header class="mb-2">
			<Calendar.PrevButton />
			<Calendar.Heading />
			<Calendar.NextButton />
		</Calendar.Header>
		{#each months as month (month.value.toString())}
			<Calendar.Grid>
				<Calendar.GridHead>
					<Calendar.GridRow>
						{#each weekdays as day, d (d)}<Calendar.HeadCell>{day.slice(0, 2)}</Calendar.HeadCell
							>{/each}
					</Calendar.GridRow>
				</Calendar.GridHead>
				<Calendar.GridBody>
					{#each month.weeks as weekDates, i (i)}
						<Calendar.GridRow>
							{#each weekDates as date (date.toString())}
								<Calendar.Cell {date} month={month.value}><Calendar.Day /></Calendar.Cell>
							{/each}
						</Calendar.GridRow>
					{/each}
				</Calendar.GridBody>
			</Calendar.Grid>
		{/each}
	{/snippet}
</Calendar.Root>

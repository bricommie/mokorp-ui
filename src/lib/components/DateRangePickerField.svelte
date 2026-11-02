<script lang="ts">
	import type { DateValue } from '@internationalized/date';
	import type { Month, SegmentPart } from 'bits-ui';
	import { cn } from '../cn.js';
	import * as DateRangePicker from './date-range-picker/index.js';

	type DateRange = { start: DateValue | undefined; end: DateValue | undefined };

	type Props = {
		label?: string;
		value?: DateRange;
		placeholder?: DateValue | undefined;
		open?: boolean;
		locale?: string;
		class?: string;
		disabled?: boolean;
		readonly?: boolean;
		minValue?: DateValue;
		maxValue?: DateValue;
		isDateUnavailable?: (date: DateValue) => boolean;
		onValueChange?: (value: DateRange) => void;
	};

	let {
		label,
		value = $bindable(),
		placeholder = $bindable(),
		open = $bindable(false),
		locale = 'fr-FR',
		class: className,
		...rest
	}: Props = $props();
</script>

<!-- Champ période complet : label, deux champs (début → fin), bouton, calendrier de plage — §7 -->
<DateRangePicker.Root
	weekdayFormat="short"
	bind:value
	bind:placeholder
	bind:open
	{locale}
	{...rest}
>
	<div class={cn('grid gap-1.5', className)}>
		{#if label}<DateRangePicker.Label>{label}</DateRangePicker.Label>{/if}
		<div
			class="rounded-field flex flex-wrap items-center gap-2 border-(length:--border-width) border-input bg-background px-3 py-2 font-body text-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background"
		>
			<DateRangePicker.Input
				type="start"
				class="border-0 p-0 focus-within:ring-0 focus-within:ring-offset-0"
			>
				{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
					{#each segments as { part, value: v }, i (i)}
						<DateRangePicker.Segment {part}>{v}</DateRangePicker.Segment>
					{/each}
				{/snippet}
			</DateRangePicker.Input>
			<span aria-hidden="true" class="text-muted-foreground">à</span>
			<DateRangePicker.Input
				type="end"
				class="border-0 p-0 focus-within:ring-0 focus-within:ring-offset-0"
			>
				{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
					{#each segments as { part, value: v }, i (i)}
						<DateRangePicker.Segment {part}>{v}</DateRangePicker.Segment>
					{/each}
				{/snippet}
			</DateRangePicker.Input>
			<DateRangePicker.Trigger />
		</div>
	</div>
	<DateRangePicker.Portal>
		<DateRangePicker.Content>
			<DateRangePicker.Calendar>
				{#snippet children({
					months,
					weekdays
				}: {
					months: Month<DateValue>[];
					weekdays: string[];
				})}
					<DateRangePicker.Header class="mb-2">
						<DateRangePicker.PrevButton />
						<DateRangePicker.Heading />
						<DateRangePicker.NextButton />
					</DateRangePicker.Header>
					{#each months as month (month.value.toString())}
						<DateRangePicker.Grid>
							<DateRangePicker.GridHead>
								<DateRangePicker.GridRow>
									{#each weekdays as day, d (d)}<DateRangePicker.HeadCell
											>{day.slice(0, 2)}</DateRangePicker.HeadCell
										>{/each}
								</DateRangePicker.GridRow>
							</DateRangePicker.GridHead>
							<DateRangePicker.GridBody>
								{#each month.weeks as weekDates, i (i)}
									<DateRangePicker.GridRow>
										{#each weekDates as date (date.toString())}
											<DateRangePicker.Cell {date} month={month.value}
												><DateRangePicker.Day /></DateRangePicker.Cell
											>
										{/each}
									</DateRangePicker.GridRow>
								{/each}
							</DateRangePicker.GridBody>
						</DateRangePicker.Grid>
					{/each}
				{/snippet}
			</DateRangePicker.Calendar>
		</DateRangePicker.Content>
	</DateRangePicker.Portal>
</DateRangePicker.Root>

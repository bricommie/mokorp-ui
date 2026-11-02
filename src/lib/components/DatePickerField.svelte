<script lang="ts">
	import type { DateValue } from '@internationalized/date';
	import type { Month, SegmentPart } from 'bits-ui';
	import { cn } from '../cn.js';
	import * as DatePicker from './date-picker/index.js';

	type Props = {
		label?: string;
		value?: DateValue | undefined;
		placeholder?: DateValue | undefined;
		open?: boolean;
		locale?: string;
		class?: string;
		disabled?: boolean;
		readonly?: boolean;
		minValue?: DateValue;
		maxValue?: DateValue;
		isDateUnavailable?: (date: DateValue) => boolean;
		onValueChange?: (value: DateValue | undefined) => void;
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

<!-- Champ date complet : label, segments éditables, bouton, calendrier en popover — §7 -->
<DatePicker.Root weekdayFormat="short" bind:value bind:placeholder bind:open {locale} {...rest}>
	<div class={cn('grid gap-1.5', className)}>
		{#if label}<DatePicker.Label>{label}</DatePicker.Label>{/if}
		<DatePicker.Input>
			{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
				{#each segments as { part, value: v }, i (i)}
					<DatePicker.Segment {part}>{v}</DatePicker.Segment>
				{/each}
				<DatePicker.Trigger />
			{/snippet}
		</DatePicker.Input>
	</div>
	<DatePicker.Portal>
		<DatePicker.Content>
			<DatePicker.Calendar>
				{#snippet children({
					months,
					weekdays
				}: {
					months: Month<DateValue>[];
					weekdays: string[];
				})}
					<DatePicker.Header class="mb-2">
						<DatePicker.PrevButton />
						<DatePicker.Heading />
						<DatePicker.NextButton />
					</DatePicker.Header>
					{#each months as month (month.value.toString())}
						<DatePicker.Grid>
							<DatePicker.GridHead>
								<DatePicker.GridRow>
									{#each weekdays as day, d (d)}<DatePicker.HeadCell
											>{day.slice(0, 2)}</DatePicker.HeadCell
										>{/each}
								</DatePicker.GridRow>
							</DatePicker.GridHead>
							<DatePicker.GridBody>
								{#each month.weeks as weekDates, i (i)}
									<DatePicker.GridRow>
										{#each weekDates as date (date.toString())}
											<DatePicker.Cell {date} month={month.value}
												><DatePicker.Day /></DatePicker.Cell
											>
										{/each}
									</DatePicker.GridRow>
								{/each}
							</DatePicker.GridBody>
						</DatePicker.Grid>
					{/each}
				{/snippet}
			</DatePicker.Calendar>
		</DatePicker.Content>
	</DatePicker.Portal>
</DatePicker.Root>

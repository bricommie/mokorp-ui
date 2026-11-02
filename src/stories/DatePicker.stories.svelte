<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DatePicker from '#lib/components/date-picker/index.js';
	import { Root } from '#lib/components/date-picker/index.js';

	const { Story } = defineMeta({
		title: 'Components/DatePicker',
		component: Root
	});
</script>

<script lang="ts">
	import { CalendarDate, type DateValue } from '@internationalized/date';
	import type { Month, SegmentPart } from 'bits-ui';

	let value = $state<DateValue | undefined>(new CalendarDate(2025, 2, 14));
</script>

<Story name="Default" args={{ value }}>
	<DatePicker.Label>Date</DatePicker.Label>
	<DatePicker.Input>
		{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<DatePicker.Segment {part}>{value}</DatePicker.Segment>
			{/each}
			<DatePicker.Trigger>
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
			</DatePicker.Trigger>
		{/snippet}
	</DatePicker.Input>
	<DatePicker.Content>
		<DatePicker.Calendar>
			{#snippet children({ months, weekdays }: { months: Month<DateValue>[]; weekdays: string[] })}
				<DatePicker.Header>
					<DatePicker.PrevButton>←</DatePicker.PrevButton>
					<DatePicker.Heading />
					<DatePicker.NextButton>→</DatePicker.NextButton>
				</DatePicker.Header>
				{#each months as month}
					<DatePicker.Grid>
						<DatePicker.GridHead>
							<DatePicker.GridRow>
								{#each weekdays as day}
									<DatePicker.HeadCell>{day}</DatePicker.HeadCell>
								{/each}
							</DatePicker.GridRow>
						</DatePicker.GridHead>
						<DatePicker.GridBody>
							{#each month.weeks as weekDates}
								<DatePicker.GridRow>
									{#each weekDates as date}
										<DatePicker.Cell date={date} month={month.value}>
											<DatePicker.Day />
										</DatePicker.Cell>
									{/each}
								</DatePicker.GridRow>
							{/each}
						</DatePicker.GridBody>
					</DatePicker.Grid>
				{/each}
			{/snippet}
		</DatePicker.Calendar>
	</DatePicker.Content>
</Story>

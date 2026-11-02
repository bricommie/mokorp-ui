<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DateRangePicker from '#lib/components/date-range-picker/index.js';
	import { Root } from '#lib/components/date-range-picker/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Dates et heures/DateRangePicker',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Champ de **plage** de dates avec calendrier dans un popover, composable. Pour l\'usage courant : `DateRangePickerField`.\n\n**Anatomie** : `DateRangePicker.Root` › `Label` · `Input type="start"` / `type="end"` · `Trigger` ; `Portal` › `Content` › `Calendar`.'
				}
			}
		},
		argTypes: {
			value: {
				description: 'Plage `{ start, end }`. Utilisable avec `bind:value`.',
				table: {
					type: {
						summary: '{ start: DateValue; end: DateValue }'
					},
					category: 'Props'
				}
			},
			open: {
				control: 'boolean',
				description: 'Ouverture du calendrier. Utilisable avec `bind:open`.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			onOpenChange: {
				description: "Appelé à chaque changement d'ouverture, avec le nouvel état.",
				table: {
					type: {
						summary: '(open: boolean) => void'
					},
					category: 'Événements'
				}
			},
			locale: {
				control: 'text',
				description: 'Locale BCP 47 utilisée pour les libellés et le format des dates.',
				table: {
					defaultValue: {
						summary: "'fr-FR'"
					},
					category: 'Props'
				}
			},
			minValue: {
				description: 'Première date sélectionnable (`DateValue` de `@internationalized/date`).',
				table: {
					type: {
						summary: 'DateValue'
					},
					category: 'Props'
				}
			},
			maxValue: {
				description: 'Dernière date sélectionnable.',
				table: {
					type: {
						summary: 'DateValue'
					},
					category: 'Props'
				}
			},
			minDays: {
				control: 'number',
				description: 'Durée minimale de la plage.',
				table: {
					category: 'Props'
				}
			},
			maxDays: {
				control: 'number',
				description: 'Durée maximale de la plage.',
				table: {
					category: 'Props'
				}
			},
			closeOnRangeSelect: {
				control: 'boolean',
				description: 'Ferme le calendrier quand la plage est complète.',
				table: {
					defaultValue: {
						summary: 'true'
					},
					category: 'Props'
				}
			},
			readonly: {
				control: 'boolean',
				description: 'Lecture seule : la valeur est visible et focusable mais ne peut pas changer.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			disabled: {
				control: 'boolean',
				description: 'Désactive le composant : ni focus, ni interaction.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			}
		}
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
	<DateRangePicker.Trigger></DateRangePicker.Trigger>
	<DateRangePicker.Content>
		<DateRangePicker.Calendar>
			{#snippet children({ months, weekdays }: { months: Month<DateValue>[]; weekdays: string[] })}
				<DateRangePicker.Header>
					<DateRangePicker.PrevButton />
					<DateRangePicker.Heading />
					<DateRangePicker.NextButton />
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
										<DateRangePicker.Cell {date} month={month.value}>
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

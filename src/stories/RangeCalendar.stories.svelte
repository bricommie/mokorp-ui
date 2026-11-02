<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as RangeCalendar from '#lib/components/range-calendar/index.js';
	import { Root } from '#lib/components/range-calendar/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Dates et heures/RangeCalendar',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Calendrier composable pour choisir une **plage** de dates (début → fin). Pour l'usage courant : `DateRangeCalendar`.\n\n**Anatomie** : identique à `Calendar` (`RangeCalendar.Root` › `Header` › `Grid` › … › `Day`)."
				}
			}
		},
		argTypes: {
			value: {
				description: 'Plage sélectionnée `{ start, end }`. Utilisable avec `bind:value`.',
				table: {
					type: {
						summary: '{ start: DateValue; end: DateValue }'
					},
					category: 'Props'
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
				description: 'Durée minimale de la plage, en jours.',
				table: {
					category: 'Props'
				}
			},
			maxDays: {
				control: 'number',
				description: 'Durée maximale de la plage, en jours.',
				table: {
					category: 'Props'
				}
			},
			numberOfMonths: {
				control: 'number',
				description: 'Nombre de mois affichés côte à côte.',
				table: {
					defaultValue: {
						summary: '1'
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

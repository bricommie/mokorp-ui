<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Calendar from '#lib/components/calendar/index.js';
	import { Root } from '#lib/components/calendar/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Dates et heures/Calendar',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Calendrier **composable** pour choisir une date. Pour l'usage courant, préférez la composition prête à l'emploi `DateCalendar`.\n\n**Anatomie** : `Calendar.Root` (snippet `children` avec `months`, `weekdays`) › `Calendar.Header` (`PrevButton` · `Heading` · `NextButton`) › `Calendar.Grid` › `GridHead` / `GridBody` › `GridRow` › `HeadCell` / `Cell` › `Day`.\n\n**Accessibilité** : grille ARIA, flèches (jour/semaine), Page préc./suiv. (mois). Les valeurs sont des `DateValue` de `@internationalized/date` (pas des `Date` JS : pas de piège de fuseau)."
				}
			}
		},
		argTypes: {
			type: {
				control: 'inline-radio',
				options: ['single', 'multiple'],
				description: '`single` : une date ; `multiple` : plusieurs dates.',
				table: {
					category: 'Props'
				}
			},
			value: {
				description: 'Date(s) sélectionnée(s). Utilisable avec `bind:value`.',
				table: {
					type: {
						summary: 'DateValue | DateValue[]'
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
			fixedWeeks: {
				control: 'boolean',
				description: "Toujours 6 semaines : la hauteur ne saute pas d'un mois à l'autre.",
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			weekStartsOn: {
				control: 'number',
				description:
					'Premier jour de la semaine (0 = dimanche, 1 = lundi). Par défaut, celui de la locale.',
				table: {
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

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DatePicker from '#lib/components/date-picker/index.js';
	import { Root } from '#lib/components/date-picker/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Dates et heures/DatePicker',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Champ de date **avec calendrier** dans un popover, composable. Pour l'usage courant : `DatePickerField`.\n\n**Anatomie** : `DatePicker.Root` › `DatePicker.Label` · `DatePicker.Input` › `Segment` + `DatePicker.Trigger` ; `DatePicker.Portal` › `DatePicker.Content` › `DatePicker.Calendar` (même anatomie que `Calendar`)."
				}
			}
		},
		argTypes: {
			value: {
				description: 'Date sélectionnée. Utilisable avec `bind:value`.',
				table: {
					type: {
						summary: 'DateValue | undefined'
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
			closeOnDateSelect: {
				control: 'boolean',
				description: "Ferme le calendrier dès qu'une date est choisie.",
				table: {
					defaultValue: {
						summary: 'true'
					},
					category: 'Props'
				}
			},
			granularity: {
				control: 'select',
				options: ['day', 'hour', 'minute', 'second'],
				description:
					"Précision de la saisie : jusqu'au jour, à l'heure, à la minute ou à la seconde.",
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
			<DatePicker.Trigger></DatePicker.Trigger>
		{/snippet}
	</DatePicker.Input>
	<DatePicker.Content>
		<DatePicker.Calendar>
			{#snippet children({ months, weekdays }: { months: Month<DateValue>[]; weekdays: string[] })}
				<DatePicker.Header>
					<DatePicker.PrevButton />
					<DatePicker.Heading />
					<DatePicker.NextButton />
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
										<DatePicker.Cell {date} month={month.value}>
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

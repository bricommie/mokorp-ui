<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DateRangeField from '#lib/components/date-range-field/index.js';
	import { Root } from '#lib/components/date-range-field/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Dates et heures/DateRangeField',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Saisie d\'une **plage** de dates au clavier (deux champs début / fin), sans calendrier.\n\n**Anatomie** : `DateRangeField.Root` › `Label` · `Input type="start"` / `Input type="end"` › `Segment`.'
				}
			}
		},
		argTypes: {
			value: {
				description: 'Plage saisie `{ start, end }`. Utilisable avec `bind:value`.',
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
			granularity: {
				control: 'select',
				options: ['day', 'hour', 'minute', 'second'],
				description:
					"Précision de la saisie : jusqu'au jour, à l'heure, à la minute ou à la seconde.",
				table: {
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
	import type { SegmentPart } from 'bits-ui';

	let value = $state<{ start: DateValue | undefined; end: DateValue | undefined }>({
		start: new CalendarDate(2025, 2, 10),
		end: new CalendarDate(2025, 2, 20)
	});
</script>

<Story name="Default" args={{ value }}>
	<DateRangeField.Label>Période de séjour</DateRangeField.Label>
	<DateRangeField.Input type="start">
		{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<DateRangeField.Segment {part}>{value}</DateRangeField.Segment>
			{/each}
		{/snippet}
	</DateRangeField.Input>
	<DateRangeField.Input type="end">
		{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<DateRangeField.Segment {part}>{value}</DateRangeField.Segment>
			{/each}
		{/snippet}
	</DateRangeField.Input>
</Story>

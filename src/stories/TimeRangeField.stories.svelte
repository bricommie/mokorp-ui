<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as TimeRangeField from '#lib/components/time-range-field/index.js';
	import { Root } from '#lib/components/time-range-field/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Dates et heures/TimeRangeField',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Saisie d\'une **plage horaire** (début / fin) au clavier : horaires d\'ouverture, créneaux.\n\n**Anatomie** : `TimeRangeField.Root` › `Label` · `Input type="start"` / `Input type="end"` › `Segment`.'
				}
			}
		},
		argTypes: {
			value: {
				description: 'Plage saisie `{ start, end }`. Utilisable avec `bind:value`.',
				table: {
					type: {
						summary: '{ start: TimeValue; end: TimeValue }'
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
			hourCycle: {
				control: 'inline-radio',
				options: [12, 24],
				description: 'Format horaire : 12 h (AM/PM) ou 24 h. Par défaut, celui de la locale.',
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
	import { Time } from '@internationalized/date';
	import type { TimeSegmentPart } from 'bits-ui';

	let value = $state<{ start: Time | undefined; end: Time | undefined }>({
		start: new Time(9, 0),
		end: new Time(17, 30)
	});
</script>

<Story name="Default" args={{ value }}>
	<TimeRangeField.Label>Horaires d'ouverture</TimeRangeField.Label>
	<TimeRangeField.Input type="start">
		{#snippet children({ segments }: { segments: { part: TimeSegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
			{/each}
		{/snippet}
	</TimeRangeField.Input>
	<TimeRangeField.Input type="end">
		{#snippet children({ segments }: { segments: { part: TimeSegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<TimeRangeField.Segment {part}>{value}</TimeRangeField.Segment>
			{/each}
		{/snippet}
	</TimeRangeField.Input>
</Story>

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DateField from '#lib/components/date-field/index.js';
	import { Root } from '#lib/components/date-field/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Dates et heures/DateField',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Saisie d'une date **au clavier**, segment par segment (jour / mois / année), sans calendrier. Idéal pour une date connue (date de naissance).\n\n**Anatomie** : `DateField.Root` › `DateField.Label` · `DateField.Input` (snippet `children` avec `segments`) › `DateField.Segment`.\n\n**Accessibilité** : chaque segment est un `spinbutton` (flèches ↑/↓, saisie directe)."
				}
			}
		},
		argTypes: {
			value: {
				description: 'Date saisie. Utilisable avec `bind:value`.',
				table: {
					type: {
						summary: 'DateValue | undefined'
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
			hourCycle: {
				control: 'inline-radio',
				options: [12, 24],
				description: 'Format horaire : 12 h (AM/PM) ou 24 h. Par défaut, celui de la locale.',
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

	let value = $state<DateValue | undefined>(new CalendarDate(2025, 2, 14));
</script>

<Story name="Default" args={{ value }}>
	<DateField.Label>Date de naissance</DateField.Label>
	<DateField.Input>
		{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<DateField.Segment {part}>{value}</DateField.Segment>
			{/each}
		{/snippet}
	</DateField.Input>
</Story>

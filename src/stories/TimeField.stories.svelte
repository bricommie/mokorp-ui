<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as TimeField from '#lib/components/time-field/index.js';
	import { Root } from '#lib/components/time-field/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Dates et heures/TimeField',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Saisie d'une **heure** au clavier, segment par segment.\n\n**Anatomie** : `TimeField.Root` › `TimeField.Label` · `TimeField.Input` › `TimeField.Segment`.\n\nLes valeurs sont des `Time` de `@internationalized/date`."
				}
			}
		},
		argTypes: {
			value: {
				description: 'Heure saisie. Utilisable avec `bind:value`.',
				table: {
					type: {
						summary: 'TimeValue | undefined'
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
			granularity: {
				control: 'inline-radio',
				options: ['hour', 'minute', 'second'],
				description: 'Précision : heure, minute ou seconde.',
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

	let value = $state<Time | undefined>(new Time(12, 30));
</script>

<Story name="Default" args={{ value }}>
	<TimeField.Label>Heure du rendez-vous</TimeField.Label>
	<TimeField.Input>
		{#snippet children({ segments }: { segments: { part: TimeSegmentPart; value: string }[] })}
			{#each segments as { part, value }}
				<TimeField.Segment {part}>{value}</TimeField.Segment>
			{/each}
		{/snippet}
	</TimeField.Input>
</Story>

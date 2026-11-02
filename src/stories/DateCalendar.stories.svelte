<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DateCalendar from '#lib/components/DateCalendar.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Dates et heures/DateCalendar',
		component: DateCalendar,
		parameters: {
			docs: {
				description: {
					component:
						"**Composition prête à l'emploi** : un calendrier complet (en-tête, navigation, grille) en une balise. Le changement de mois glisse dans le sens de la navigation.\n\n```svelte\n<DateCalendar bind:value={date} minValue={today(getLocalTimeZone())} />\n```"
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
				description: 'Toujours 6 semaines (hauteur stable).',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			isDateDisabled: {
				description: 'Fonction : `true` pour une date non sélectionnable (ex. week-ends).',
				table: {
					type: {
						summary: '(date: DateValue) => boolean'
					},
					category: 'Props'
				}
			},
			isDateUnavailable: {
				description: 'Fonction : `true` pour une date indisponible (affichée barrée).',
				table: {
					type: {
						summary: '(date: DateValue) => boolean'
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
			},
			onValueChange: {
				description: 'Appelé quand la date change.',
				table: {
					type: {
						summary: '(value: DateValue | undefined) => void'
					},
					category: 'Événements'
				}
			}
		}
	});
</script>

<Story name="Default" />

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DatePickerField from '#lib/components/DatePickerField.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Dates et heures/DatePickerField',
		component: DatePickerField,
		parameters: {
			docs: {
				description: {
					component:
						'**Composition prête à l\'emploi** : libellé + champ segmenté + bouton calendrier + popover animé, en une balise. Le popover entre/sort avec la transition `pop`, le mois glisse dans le sens de la navigation, le jour choisi « pop » ; tout s\'éteint en mouvement réduit.\n\n```svelte\n<DatePickerField label="Date de livraison" bind:value={date} />\n```'
				}
			}
		},
		argTypes: {
			label: {
				control: 'text',
				description: 'Libellé visible du champ (et son nom accessible).',
				table: {
					category: 'Props'
				}
			},
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
			isDateUnavailable: {
				description: 'Fonction : `true` pour une date indisponible.',
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

<Story name="Default" args={{ label: 'Date de mise en ligne', class: 'w-72' }} />

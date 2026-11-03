<!--
@component
**DateCalendar** — **Composition prête à l'emploi** : un calendrier complet (en-tête, navigation, grille) en une balise. Le changement de mois glisse dans le sens de la navigation.

Les valeurs sont des `DateValue` de `@internationalized/date`. Pour composer votre propre calendrier : `Calendar`. (`today` et `getLocalTimeZone` viennent de `@internationalized/date`.)

```svelte
<DateCalendar bind:value={date} minValue={today(getLocalTimeZone())} />
```
-->
<script lang="ts">
	import type { DateValue } from '@internationalized/date';
	import type { Month } from 'bits-ui';
	import { cn } from '../cn.js';
	import * as Calendar from './calendar/index.js';

	type Props = {
		/** Date sélectionnée (`DateValue` de `@internationalized/date`). Bindable. */
		value?: DateValue | undefined;
		/** Mois affiché quand aucune date n'est choisie (pilote la navigation). Bindable. */
		placeholder?: DateValue | undefined;
		/**
		 * Langue des noms de mois / jours et ordre des segments (BCP 47).
		 * @default 'fr-FR'
		 */
		locale?: string;
		/** Classes Tailwind ajoutées sur le conteneur (fusionnées avec `cn`). */
		class?: string;
		/**
		 * Désactive toute interaction.
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * Affiche la valeur sans permettre de la modifier.
		 * @default false
		 */
		readonly?: boolean;
		/**
		 * Affiche toujours 6 semaines (hauteur constante d'un mois à l'autre).
		 * @default false
		 */
		fixedWeeks?: boolean;
		/**
		 * Nombre de mois affichés côte à côte.
		 * @default 1
		 */
		numberOfMonths?: number;
		/** Première date sélectionnable. */
		minValue?: DateValue;
		/** Dernière date sélectionnable. */
		maxValue?: DateValue;
		/** Rend une date non sélectionnable et non focusable (ex. dates passées). */
		isDateDisabled?: (date: DateValue) => boolean;
		/** Marque une date comme indisponible (barrée, focusable mais non sélectionnable : ex. complet). */
		isDateUnavailable?: (date: DateValue) => boolean;
		/** Appelé à chaque changement de valeur. */
		onValueChange?: (value: DateValue | undefined) => void;
	};

	let {
		value = $bindable(),
		placeholder = $bindable(),
		locale = 'fr-FR',
		class: className,
		...rest
	}: Props = $props();
</script>

<!-- Calendrier mensuel prêt à l'emploi (sélection simple) : en-tête, grille, jours — §7 -->
<Calendar.Root
	type="single"
	weekdayFormat="short"
	bind:value
	bind:placeholder
	{locale}
	{...rest}
	class={cn(
		'rounded-surface inline-block border-(length:--border-width) border-border-subtle bg-card p-3 text-card-foreground',
		className
	)}
>
	{#snippet children({ months, weekdays }: { months: Month<DateValue>[]; weekdays: string[] })}
		<Calendar.Header class="mb-2">
			<Calendar.PrevButton />
			<Calendar.Heading />
			<Calendar.NextButton />
		</Calendar.Header>
		{#each months as month (month.value.toString())}
			<Calendar.Grid>
				<Calendar.GridHead>
					<Calendar.GridRow>
						{#each weekdays as day, d (d)}<Calendar.HeadCell>{day.slice(0, 2)}</Calendar.HeadCell
							>{/each}
					</Calendar.GridRow>
				</Calendar.GridHead>
				<Calendar.GridBody>
					{#each month.weeks as weekDates, i (i)}
						<Calendar.GridRow>
							{#each weekDates as date (date.toString())}
								<Calendar.Cell {date} month={month.value}><Calendar.Day /></Calendar.Cell>
							{/each}
						</Calendar.GridRow>
					{/each}
				</Calendar.GridBody>
			</Calendar.Grid>
		{/each}
	{/snippet}
</Calendar.Root>

<!--
@component
**DateRangeCalendar** — **Composition prête à l'emploi** : calendrier de **plage** complet en une balise. Début / fin en `primary`, jours intermédiaires en `muted`.

Pour composer votre propre calendrier de plage : `RangeCalendar`.

```svelte
<DateRangeCalendar bind:value={range} numberOfMonths={2} />
```
-->
<script lang="ts">
	import type { DateValue } from '@internationalized/date';
	import type { Month } from 'bits-ui';
	import { cn } from '../cn.js';
	import * as RangeCalendar from './range-calendar/index.js';

	type DateRange = { start: DateValue | undefined; end: DateValue | undefined };

	type Props = {
		/** Plage sélectionnée `{ start, end }` (des `DateValue`). Bindable. */
		value?: DateRange;
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
		onValueChange?: (value: DateRange) => void;
	};

	let {
		value = $bindable(),
		placeholder = $bindable(),
		locale = 'fr-FR',
		class: className,
		...rest
	}: Props = $props();
</script>

<!-- Calendrier de plage prêt à l'emploi : début/fin = primary, milieu = muted — §7 -->
<RangeCalendar.Root
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
		<RangeCalendar.Header class="mb-2">
			<RangeCalendar.PrevButton />
			<RangeCalendar.Heading />
			<RangeCalendar.NextButton />
		</RangeCalendar.Header>
		{#each months as month (month.value.toString())}
			<RangeCalendar.Grid>
				<RangeCalendar.GridHead>
					<RangeCalendar.GridRow>
						{#each weekdays as day, d (d)}<RangeCalendar.HeadCell
								>{day.slice(0, 2)}</RangeCalendar.HeadCell
							>{/each}
					</RangeCalendar.GridRow>
				</RangeCalendar.GridHead>
				<RangeCalendar.GridBody>
					{#each month.weeks as weekDates, i (i)}
						<RangeCalendar.GridRow>
							{#each weekDates as date (date.toString())}
								<RangeCalendar.Cell {date} month={month.value}
									><RangeCalendar.Day /></RangeCalendar.Cell
								>
							{/each}
						</RangeCalendar.GridRow>
					{/each}
				</RangeCalendar.GridBody>
			</RangeCalendar.Grid>
		{/each}
	{/snippet}
</RangeCalendar.Root>

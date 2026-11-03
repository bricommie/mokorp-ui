<!--
@component
**DatePickerField** — **Composition prête à l'emploi** : libellé + champ segmenté + bouton calendrier + popover animé, en une balise. Le popover entre / sort avec la transition `pop`, le mois glisse dans le sens de la navigation ; tout s'éteint en mouvement réduit.

Pour une composition sur mesure : `DatePicker`.

```svelte
<DatePickerField label="Date de livraison" bind:value={date} />
```
-->
<script lang="ts">
	import type { DateValue } from '@internationalized/date';
	import type { Month, SegmentPart } from 'bits-ui';
	import { fly } from 'svelte/transition';
	import { cn } from '../cn.js';
	import { duration, easings } from '../motion/index.js';
	import * as DatePicker from './date-picker/index.js';

	type Props = {
		/** Libellé visible du champ. Sans lui, donnez un nom accessible autrement. */
		label?: string;
		/** Date sélectionnée (`DateValue` de `@internationalized/date`). Bindable. */
		value?: DateValue | undefined;
		/** Mois affiché quand aucune date n'est choisie (pilote la navigation). Bindable. */
		placeholder?: DateValue | undefined;
		/**
		 * Ouverture du calendrier en popover. Bindable.
		 * @default false
		 */
		open?: boolean;
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
		/** Première date sélectionnable. */
		minValue?: DateValue;
		/** Dernière date sélectionnable. */
		maxValue?: DateValue;
		/** Marque une date comme indisponible (barrée, focusable mais non sélectionnable : ex. complet). */
		isDateUnavailable?: (date: DateValue) => boolean;
		/** Appelé à chaque changement de valeur. */
		onValueChange?: (value: DateValue | undefined) => void;
		/** Appelé quand le mois affiché change (navigation). */
		onPlaceholderChange?: (placeholder: DateValue | undefined) => void;
	};

	let {
		label,
		value = $bindable(),
		placeholder = $bindable(),
		open = $bindable(false),
		locale = 'fr-FR',
		class: className,
		onPlaceholderChange,
		...rest
	}: Props = $props();

	/*
	 * Sens du changement de mois : le nouveau mois arrive par la droite quand on
	 * avance, par la gauche quand on recule — l'animation porte une information
	 * (où suis-je dans le temps ?), elle n'est pas décorative.
	 * `previous` n'est pas un `$state` : on ne veut pas de re-rendu, juste un repère.
	 */
	let direction = $state<1 | -1>(1);
	let previous: DateValue | undefined;

	function trackDirection(next: DateValue | undefined) {
		if (next && previous) direction = next.compare(previous) >= 0 ? 1 : -1;
		previous = next;
		onPlaceholderChange?.(next);
	}
</script>

<!-- Champ date complet : label, segments éditables, bouton, calendrier en popover — §7 -->
<DatePicker.Root
	weekdayFormat="short"
	bind:value
	bind:placeholder
	bind:open
	{locale}
	onPlaceholderChange={trackDirection}
	{...rest}
>
	<div class={cn('grid gap-1.5', className)}>
		{#if label}<DatePicker.Label>{label}</DatePicker.Label>{/if}
		<DatePicker.Input>
			{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
				{#each segments as { part, value: v }, i (i)}
					<DatePicker.Segment {part}>{v}</DatePicker.Segment>
				{/each}
				<DatePicker.Trigger />
			{/snippet}
		</DatePicker.Input>
	</div>
	<DatePicker.Portal>
		<DatePicker.Content>
			<DatePicker.Calendar>
				{#snippet children({
					months,
					weekdays
				}: {
					months: Month<DateValue>[];
					weekdays: string[];
				})}
					<DatePicker.Header class="mb-2">
						<DatePicker.PrevButton />
						<DatePicker.Heading />
						<DatePicker.NextButton />
					</DatePicker.Header>
					<!-- Clé = le mois : chaque navigation recrée la grille et joue `in:fly`. -->
					{#each months as month (month.value.toString())}
						<div
							class="overflow-hidden"
							in:fly={{
								x: 24 * direction,
								duration: duration('slow'),
								easing: easings.standard
							}}
						>
							<DatePicker.Grid>
								<DatePicker.GridHead>
									<DatePicker.GridRow>
										{#each weekdays as day, d (d)}<DatePicker.HeadCell
												>{day.slice(0, 2)}</DatePicker.HeadCell
											>{/each}
									</DatePicker.GridRow>
								</DatePicker.GridHead>
								<DatePicker.GridBody>
									{#each month.weeks as weekDates, i (i)}
										<DatePicker.GridRow>
											{#each weekDates as date (date.toString())}
												<DatePicker.Cell {date} month={month.value}
													><DatePicker.Day /></DatePicker.Cell
												>
											{/each}
										</DatePicker.GridRow>
									{/each}
								</DatePicker.GridBody>
							</DatePicker.Grid>
						</div>
					{/each}
				{/snippet}
			</DatePicker.Calendar>
		</DatePicker.Content>
	</DatePicker.Portal>
</DatePicker.Root>

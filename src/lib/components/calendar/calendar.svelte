<!--
@component
**Calendar.Root** — Calendrier **composable** pour choisir une date. Pour l'usage courant, préférez la composition prête à l'emploi `DateCalendar`.

**Anatomie** : `Calendar.Root` (snippet `children` avec `months`, `weekdays`) › `Calendar.Header` (`PrevButton` · `Heading` · `NextButton`) › `Calendar.Grid` › `GridHead` / `GridBody` › `GridRow` › `HeadCell` / `Cell` › `Day`.

- `type` (**obligatoire**) : `"single"` ou `"multiple"`.
- `bind:value` / `bind:placeholder` : des `DateValue` de `@internationalized/date` (pas des `Date` JS : pas de piège de fuseau).

**Accessibilité** : grille ARIA, flèches (jour / semaine), Page préc. / suiv. (mois).

[API Bits UI](https://bits-ui.com/docs/components/calendar)
-->
<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type Props = CalendarPrimitive.RootProps;

	let { value = $bindable(), placeholder = $bindable(), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<CalendarPrimitive.Root
	bind:value={value as never}
	bind:placeholder={placeholder as never}
	{...rest}
/>

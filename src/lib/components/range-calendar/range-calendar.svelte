<!--
@component
**RangeCalendar.Root** — Calendrier composable pour choisir une **plage** de dates (début → fin). Pour l'usage courant : `DateRangeCalendar`.

**Anatomie** : identique à `Calendar` (`RangeCalendar.Root` › `Header` › `Grid` › … › `Day`). Utilisable avec `bind:value` (`{ start, end }`).

[API Bits UI](https://bits-ui.com/docs/components/range-calendar)
-->
<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.RootProps;

	let { value = $bindable(), placeholder = $bindable(), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<RangeCalendarPrimitive.Root
	bind:value={value as never}
	bind:placeholder={placeholder as never}
	{...rest}
/>

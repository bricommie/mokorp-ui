<!--
@component
**RangeCalendar.GridRow** — Une rangée (semaine) de la grille.

[API Bits UI](https://bits-ui.com/docs/components/range-calendar)
-->
<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.GridRowProps;

	let { ...rest }: Props = $props();
</script>

<!-- Ligne de grille : pas de style (passthrough) — structurel -->
<RangeCalendarPrimitive.GridRow {...rest} />

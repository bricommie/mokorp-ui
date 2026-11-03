<!--
@component
**RangeCalendar.GridBody** — `<tbody>` de la grille : contient les semaines.

[API Bits UI](https://bits-ui.com/docs/components/range-calendar)
-->
<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.GridBodyProps;

	let { ...rest }: Props = $props();
</script>

<!-- Corps de grille : pas de style (passthrough) — structurel -->
<RangeCalendarPrimitive.GridBody {...rest} />

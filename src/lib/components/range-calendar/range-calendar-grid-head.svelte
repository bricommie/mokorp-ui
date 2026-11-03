<!--
@component
**RangeCalendar.GridHead** — `<thead>` de la grille : contient la rangée des jours de la semaine.

[API Bits UI](https://bits-ui.com/docs/components/range-calendar)
-->
<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.GridHeadProps;

	let { ...rest }: Props = $props();
</script>

<!-- En-tête de grille : pas de style (passthrough) — structurel -->
<RangeCalendarPrimitive.GridHead {...rest} />

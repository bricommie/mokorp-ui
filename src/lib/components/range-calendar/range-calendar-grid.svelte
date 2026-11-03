<!--
@component
**RangeCalendar.Grid** — Grille d'un mois (`<table>`, rôle `grid`). Une par élément de `months`.

[API Bits UI](https://bits-ui.com/docs/components/range-calendar)
-->
<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RangeCalendarPrimitive.GridProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Grille (table) : pleine largeur, bordures fusionnées — structurel -->
<RangeCalendarPrimitive.Grid {...rest} class={cn('w-full border-collapse', className)} />

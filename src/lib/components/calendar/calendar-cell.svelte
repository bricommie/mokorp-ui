<!--
@component
**Calendar.Cell** — Cellule d'un jour. Reçoit `date` et `month` (obligatoires) et contient un `Day`.

[API Bits UI](https://bits-ui.com/docs/components/calendar)
-->
<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.CellProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Cellule de grille : pas de padding, centre le jour — structurel -->
<CalendarPrimitive.Cell {...rest} class={cn('p-0 text-center', className)} />

<!--
@component
**RangeCalendar.HeadCell** — Étiquette d'un jour de semaine (« lu », « ma »…), à alimenter avec `weekdays`.

[API Bits UI](https://bits-ui.com/docs/components/range-calendar)
-->
<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RangeCalendarPrimitive.HeadCellProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Étiquette de jour de semaine — structurel -->
<RangeCalendarPrimitive.HeadCell
	{...rest}
	class={cn('p-0 text-center font-body text-xs font-semibold text-muted-foreground', className)}
/>

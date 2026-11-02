<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RangeCalendarPrimitive.DayProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Jour de plage : début/fin = primary plein, milieu = muted (spécificité doublée) — §5 -->
<RangeCalendarPrimitive.Day
	{...rest}
	class={cn(
		'rounded-item inline-flex size-9 items-center justify-center text-center font-body text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background border-(length:--border-width) border-transparent data-[today]:border-border data-[outside-month]:text-muted-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-40 data-[unavailable]:pointer-events-none data-[unavailable]:line-through data-[unavailable]:opacity-40 not-data-[selected]:hover:bg-muted not-data-[selected]:data-[highlighted]:bg-muted data-[selected]:data-[range-middle]:bg-muted data-[selected]:data-[range-middle]:text-foreground data-[selected]:data-[range-start]:border-primary-border data-[selected]:data-[range-start]:bg-primary data-[selected]:data-[range-start]:text-primary-foreground data-[selected]:data-[range-end]:border-primary-border data-[selected]:data-[range-end]:bg-primary data-[selected]:data-[range-end]:text-primary-foreground',
		className
	)}
/>

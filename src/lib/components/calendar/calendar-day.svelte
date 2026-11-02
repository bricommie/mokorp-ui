<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.DayProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Jour : survol uniquement hors sélection, jours hors-mois atténués — §5 -->
<CalendarPrimitive.Day
	{...rest}
	class={cn(
		'rounded-item inline-flex size-9 items-center justify-center text-center font-body text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background border-(length:--border-width) border-transparent data-[today]:border-border data-[outside-month]:text-muted-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-40 data-[unavailable]:pointer-events-none data-[unavailable]:line-through data-[unavailable]:opacity-40 not-data-[selected]:hover:bg-muted data-[selected]:border-primary-border data-[selected]:bg-primary data-[selected]:text-primary-foreground',
		className
	)}
/>

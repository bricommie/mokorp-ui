<!--
@component
**Calendar.Day** — Jour cliquable. Sélection en `primary` avec un léger « pop » (coupé en mouvement réduit), jours hors mois atténués, aujourd'hui souligné.

[API Bits UI](https://bits-ui.com/docs/components/calendar)
-->
<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.DayProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Jour : survol uniquement hors sélection, jours hors-mois atténués — §5.
     Sélection : petit « pop » (ease-emphasized) pour confirmer le choix. -->
<CalendarPrimitive.Day
	{...rest}
	class={cn(
		'rounded-item inline-flex size-9 items-center justify-center text-center font-body text-sm transition-[background-color,border-color,color,transform] duration-fast active:scale-90 active:duration-instant motion-reduce:active:scale-100 data-[selected]:animate-[mk-day-pop_var(--duration-base)_var(--ease-emphasized)] motion-reduce:animate-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background border-(length:--border-width) border-transparent data-[today]:border-border data-[outside-month]:text-muted-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-40 data-[unavailable]:pointer-events-none data-[unavailable]:line-through data-[unavailable]:opacity-40 not-data-[selected]:hover:bg-muted data-[selected]:border-primary-border data-[selected]:bg-primary data-[selected]:text-primary-foreground',
		className
	)}
/>

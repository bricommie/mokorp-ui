<!--
@component
**Calendar.YearSelect** — Sélecteur natif de l'année affichée (dates de naissance, échéances lointaines).

[API Bits UI](https://bits-ui.com/docs/components/calendar)
-->
<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.YearSelectProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Sélecteur d'année (natif) — structurel + ring primary — §5 -->
<CalendarPrimitive.YearSelect
	{...rest}
	class={cn(
		'rounded-field border-(length:--border-width) border-input bg-background px-2 py-1 font-body text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
		className
	)}
/>

<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.MonthSelectProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Sélecteur de mois (natif) — structurel + ring primary — §5 -->
<CalendarPrimitive.MonthSelect
	{...rest}
	class={cn(
		'border-2 border-input bg-background px-2 py-1 font-body text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
		className
	)}
/>

<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.DayProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Jour : cellule interactive — structurel + ring primary — §5 -->
<CalendarPrimitive.Day
	{...rest}
	class={cn(
		'inline-flex size-9 items-center justify-center text-center font-body text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[today]:border-2 data-[today]:border-border data-[disabled]:opacity-50 data-[unavailable]:opacity-50 hover:bg-muted',
		className
	)}
/>

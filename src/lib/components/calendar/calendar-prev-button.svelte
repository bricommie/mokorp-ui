<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.PrevButtonProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Bouton « mois précédent » — structurel + ring primary — §5 -->
<CalendarPrimitive.PrevButton
	{...rest}
	class={cn(
		'flex size-9 items-center justify-center border-2 border-input bg-background p-0 font-body text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
		className
	)}
/>

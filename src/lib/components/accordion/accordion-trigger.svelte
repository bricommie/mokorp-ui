<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AccordionPrimitive.TriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Interaction = ring primary — §5. Rotation de la flèche via data-state — §7 -->
<AccordionPrimitive.Trigger
	{...rest}
	class={cn(
		'flex flex-1 items-center justify-between gap-2 py-4 font-body text-sm font-medium text-foreground transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
		className
	)}
/>

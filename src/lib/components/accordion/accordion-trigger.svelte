<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronDown from '../icons/chevron-down.svelte';

	type Props = AccordionPrimitive.TriggerProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Interaction = ring primary — §5. Le chevron pivote via data-state — §7 -->
<AccordionPrimitive.Trigger
	{...rest}
	class={cn(
		'flex w-full flex-1 items-center justify-between gap-2 py-4 text-left font-body text-sm font-semibold text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
		className
	)}
>
	{@render children?.()}
	<ChevronDown class="size-4 shrink-0 transition-transform duration-fast" />
</AccordionPrimitive.Trigger>

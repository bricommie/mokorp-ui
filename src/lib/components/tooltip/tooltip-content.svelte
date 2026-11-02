<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TooltipPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante (structurel, coins nets) — §3 -->
<TooltipPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'z-50 border-2 border-border bg-popover px-2 py-1 font-body text-xs text-popover-foreground shadow-lg',
		className
	)}
/>

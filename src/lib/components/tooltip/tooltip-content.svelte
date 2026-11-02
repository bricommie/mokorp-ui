<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TooltipPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante (rounded-surface) — §3 -->
<TooltipPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'rounded-item z-50 border-(length:--border-width) border-border bg-popover px-2 py-1 font-body text-xs text-popover-foreground shadow-lg',
		className
	)}
/>

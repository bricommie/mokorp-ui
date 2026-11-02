<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PopoverPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante (coins nets) — §3 -->
<PopoverPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'z-50 w-72 border-2 border-border bg-popover p-4 text-popover-foreground shadow-lg outline-none',
		className
	)}
/>

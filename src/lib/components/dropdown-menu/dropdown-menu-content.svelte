<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DropdownMenuPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante — §3 -->
<DropdownMenuPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'rounded-surface z-50 min-w-32 overflow-hidden border-(length:--border-width) border-border-subtle bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

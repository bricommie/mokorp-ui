<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ContextMenuPrimitive.SubContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante du sous-menu (coins nets) — §3 -->
<ContextMenuPrimitive.SubContent
	{...rest}
	class={cn(
		'z-50 min-w-32 overflow-hidden border-2 border-border bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>
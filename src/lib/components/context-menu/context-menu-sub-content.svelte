<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ContextMenuPrimitive.SubContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante du sous-menu — §3 -->
<ContextMenuPrimitive.SubContent
	{...rest}
	class={cn(
		'rounded-surface z-50 min-w-32 overflow-hidden border-(length:--border-width) border-border-subtle bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

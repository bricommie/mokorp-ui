<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ContextMenuPrimitive.RadioItemProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Élément radio de menu (coins nets) — §3 -->
<ContextMenuPrimitive.RadioItem
	{...rest}
	class={cn(
		'relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none data-[highlighted]:bg-muted data-[state=checked]:bg-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
/>
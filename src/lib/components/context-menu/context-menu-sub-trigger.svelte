<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ContextMenuPrimitive.SubTriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Déclencheur de sous-menu (coins nets) — §3 -->
<ContextMenuPrimitive.SubTrigger
	{...rest}
	class={cn(
		'relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[highlighted]:bg-muted data-[state=open]:bg-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&[data-state=open]>svg]:rotate-180',
		className
	)}
/>
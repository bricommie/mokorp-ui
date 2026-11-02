<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DropdownMenuPrimitive.SubContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante du sous-menu (coins nets) — §3 -->
<DropdownMenuPrimitive.SubContent
	{...rest}
	class={cn(
		'z-50 min-w-32 overflow-hidden border-2 border-border bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

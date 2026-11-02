<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DropdownMenuPrimitive.ContentStaticProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante statique (coins nets) — §3 -->
<DropdownMenuPrimitive.ContentStatic
	{...rest}
	class={cn(
		'z-50 min-w-32 overflow-hidden border-2 border-border bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

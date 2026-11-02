<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PopoverPrimitive.ContentStaticProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante statique — §3 -->
<PopoverPrimitive.ContentStatic
	{...rest}
	class={cn(
		'rounded-surface z-50 w-72 border-(length:--border-width) border-border-subtle bg-popover p-4 text-popover-foreground shadow-lg outline-none',
		className
	)}
/>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SelectPrimitive.ContentStaticProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante statique (coins nets) — §3 -->
<SelectPrimitive.ContentStatic
	{...rest}
	class={cn(
		'relative z-50 min-w-32 overflow-hidden border-2 border-border bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>
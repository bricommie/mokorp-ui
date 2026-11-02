<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SelectPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante (coins nets) — §3 -->
<SelectPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'relative z-50 min-w-32 w-(--bits-select-anchor-width) max-h-80 overflow-y-auto overflow-x-hidden border-2 border-border bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

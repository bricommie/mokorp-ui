<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante (coins nets) — §3 -->
<ComboboxPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'relative z-50 min-w-32 w-(--bits-combobox-anchor-width) max-h-80 overflow-y-auto overflow-x-hidden border-2 border-border bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

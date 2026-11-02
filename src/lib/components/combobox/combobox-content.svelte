<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante (coins nets) — §3 -->
<ComboboxPrimitive.Content
	{...rest}
	class={cn(
		'relative z-50 min-w-32 overflow-hidden border-2 border-border bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>
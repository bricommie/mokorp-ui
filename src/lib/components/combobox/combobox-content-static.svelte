<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.ContentStaticProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante statique — §3 -->
<ComboboxPrimitive.ContentStatic
	{...rest}
	class={cn(
		'rounded-surface relative z-50 min-w-32 overflow-hidden border-(length:--border-width) border-border-subtle bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

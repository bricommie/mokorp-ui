<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.ItemProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Élément du combobox (coins nets) — §3 -->
<ComboboxPrimitive.Item
	{...rest}
	class={cn(
		'relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none data-[highlighted]:bg-muted data-[selected]:bg-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
/>
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.ItemProps & { inset?: boolean };

	let { class: className, inset = false, ...rest }: Props = $props();
</script>

<!-- Élément de menu — survol/focus inversé (primary) — §3 -->
<MenubarPrimitive.Item
	{...rest}
	class={cn(
		'rounded-item relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		inset && 'pl-8',
		className
	)}
/>

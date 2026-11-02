<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import Circle from '../icons/circle.svelte';

	type Props = MenubarPrimitive.RadioItemProps;

	let { class: className, children: childrenProp, ...rest }: Props = $props();
</script>

<!-- Élément radio : indicateur (point) à gauche — §3 -->
<MenubarPrimitive.RadioItem
	{...rest}
	class={cn(
		'relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 pl-8',
		className
	)}
>
	{#snippet children({ checked })}
		<span class="absolute left-2 flex size-4 items-center justify-center">
			{#if checked}<Circle class="size-2" />{/if}
		</span>
		{@render childrenProp?.({ checked })}
	{/snippet}
</MenubarPrimitive.RadioItem>

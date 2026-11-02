<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import Check from '../icons/check.svelte';

	type Props = MenubarPrimitive.CheckboxItemProps;

	let {
		class: className,
		checked = $bindable(false),
		indeterminate = $bindable(false),
		children: childrenProp,
		...rest
	}: Props = $props();
</script>

<!-- Élément à cocher : indicateur (coche) à gauche — §3 -->
<MenubarPrimitive.CheckboxItem
	bind:checked
	bind:indeterminate
	{...rest}
	class={cn(
		'rounded-item relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 pl-8',
		className
	)}
>
	{#snippet children({ checked, indeterminate })}
		<span class="absolute left-2 flex size-4 items-center justify-center">
			{#if checked || indeterminate}<Check class="size-3.5" />{/if}
		</span>
		{@render childrenProp?.({ checked, indeterminate })}
	{/snippet}
</MenubarPrimitive.CheckboxItem>

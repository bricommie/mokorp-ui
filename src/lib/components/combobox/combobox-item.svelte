<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import Check from '../icons/check.svelte';

	type Props = ComboboxPrimitive.ItemProps;

	let { class: className, label, children: childrenProp, ...rest }: Props = $props();
</script>

<!-- Option : survol inversé, coche si sélectionnée, `label` affiché par défaut — §3 -->
<ComboboxPrimitive.Item
	{...rest}
	{label}
	class={cn(
		'rounded-item relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
>
	{#snippet children({ selected, highlighted })}
		{#if childrenProp}
			{@render childrenProp({ selected, highlighted })}
		{:else}
			<span class="truncate">{label ?? rest.value}</span>
		{/if}
		{#if selected}<Check class="ml-auto size-4" />{/if}
	{/snippet}
</ComboboxPrimitive.Item>

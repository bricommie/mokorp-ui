<!--
@component
**Select.Trigger** — Champ cliquable qui ouvre la liste (aspect d'un `Input`, chevron intégré).

[API Bits UI](https://bits-ui.com/docs/components/select)
-->
<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronDown from '../icons/chevron-down.svelte';

	type Props = SelectPrimitive.TriggerProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Champ structurel + chevron intégré — §3 / §5 -->
<SelectPrimitive.Trigger
	{...rest}
	class={cn(
		'rounded-field flex h-10 w-full items-center justify-between gap-2 border-(length:--border-width) border-input bg-background px-3 py-2 text-left font-body text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&[data-state=open]>svg]:rotate-180',
		className
	)}
>
	{@render children?.()}
	<ChevronDown class="size-4 shrink-0 transition-transform" />
</SelectPrimitive.Trigger>

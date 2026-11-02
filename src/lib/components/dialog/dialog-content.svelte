<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import X from '../icons/x.svelte';

	type Props = DialogPrimitive.ContentProps & { showClose?: boolean; closeLabel?: string };

	let {
		class: className,
		showClose = true,
		closeLabel = 'Fermer',
		children,
		...rest
	}: Props = $props();
</script>

<!-- Surface flottante centrée (coins nets), bornée à la fenêtre — §3 -->
<DialogPrimitive.Content
	{...rest}
	class={cn(
		'fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto border-2 border-border bg-popover p-6 font-body text-popover-foreground shadow-xl outline-none',
		className
	)}
>
	{@render children?.()}
	{#if showClose}
		<DialogPrimitive.Close
			class="absolute right-3 top-3 inline-flex size-8 items-center justify-center border-2 border-transparent text-foreground transition-colors hover:border-border hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
		>
			<X class="size-4" />
			<span class="sr-only">{closeLabel}</span>
		</DialogPrimitive.Close>
	{/if}
</DialogPrimitive.Content>

<script lang="ts">
	import { Pagination as PaginationPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronRight from '../icons/chevron-right.svelte';

	type Props = PaginationPrimitive.NextButtonProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Bouton organique (pill), chevron par défaut — §5 -->
<PaginationPrimitive.NextButton
	{...rest}
	class={cn(
		'inline-flex size-9 items-center justify-center rounded-pill border-(length:--border-width) border-border font-body text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
		className
	)}
>
	{#if children}{@render children()}{:else}<ChevronRight class="size-4" />{/if}
</PaginationPrimitive.NextButton>

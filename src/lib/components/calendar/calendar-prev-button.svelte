<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronLeft from '../icons/chevron-left.svelte';

	type Props = CalendarPrimitive.PrevButtonProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Navigation de mois (chevron par défaut) — §5 -->
<CalendarPrimitive.PrevButton
	{...rest}
	class={cn(
		'rounded-field flex size-9 items-center justify-center border-(length:--border-width) border-input bg-background p-0 font-body text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
		className
	)}
>
	{#if children}{@render children()}{:else}<ChevronLeft class="size-4" />{/if}
</CalendarPrimitive.PrevButton>

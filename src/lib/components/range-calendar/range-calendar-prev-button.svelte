<!--
@component
**RangeCalendar.PrevButton** — Bouton « mois précédent » (chevron intégré). Pensez au `aria-label` si vous remplacez le contenu.

[API Bits UI](https://bits-ui.com/docs/components/range-calendar)
-->
<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronLeft from '../icons/chevron-left.svelte';

	type Props = RangeCalendarPrimitive.PrevButtonProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Navigation de mois (chevron par défaut) — §5 -->
<RangeCalendarPrimitive.PrevButton
	{...rest}
	class={cn(
		'rounded-field flex size-9 items-center justify-center border-(length:--border-width) border-input bg-background p-0 font-body text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
		className
	)}
>
	{#if children}{@render children()}{:else}<ChevronLeft class="size-4" />{/if}
</RangeCalendarPrimitive.PrevButton>

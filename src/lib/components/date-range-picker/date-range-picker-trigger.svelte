<script lang="ts">
	import { DateRangePicker as DateRangePickerPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import Calendar from '../icons/calendar.svelte';

	type Props = DateRangePickerPrimitive.TriggerProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Bouton d'ouverture du calendrier : compact, à poser dans le champ (icône par défaut) — §5 -->
<DateRangePickerPrimitive.Trigger
	{...rest}
	class={cn(
		'ml-auto inline-flex size-7 shrink-0 items-center justify-center text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
		className
	)}
>
	{#if children}{@render children()}{:else}<Calendar class="size-4" />{/if}
</DateRangePickerPrimitive.Trigger>

<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronDown from '../icons/chevron-down.svelte';

	type Props = ComboboxPrimitive.TriggerProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Bouton carré collé au champ (chevron par défaut) — §3 / §5 -->
<ComboboxPrimitive.Trigger
	{...rest}
	class={cn(
		'-ml-0.5 inline-flex size-10 shrink-0 items-center justify-center border-2 border-input bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
		className
	)}
>
	{#if children}{@render children()}{:else}<ChevronDown class="size-4 transition-transform" />{/if}
</ComboboxPrimitive.Trigger>

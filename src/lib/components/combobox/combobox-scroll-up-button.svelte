<!--
@component
**Combobox.ScrollUpButton** — Bouton de défilement vers le haut (chevron intégré), visible quand la liste déborde.

[API Bits UI](https://bits-ui.com/docs/components/combobox)
-->
<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronUp from '../icons/chevron-up.svelte';

	type Props = ComboboxPrimitive.ScrollUpButtonProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Défilement : chevron par défaut — §3 -->
<ComboboxPrimitive.ScrollUpButton
	{...rest}
	class={cn('flex items-center justify-center py-1 hover:bg-muted', className)}
>
	{#if children}{@render children()}{:else}<ChevronUp class="size-4" />{/if}
</ComboboxPrimitive.ScrollUpButton>

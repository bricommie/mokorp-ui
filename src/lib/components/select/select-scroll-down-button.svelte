<!--
@component
**Select.ScrollDownButton** — Bouton de défilement vers le bas (chevron intégré), visible quand la liste déborde.

[API Bits UI](https://bits-ui.com/docs/components/select)
-->
<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronDown from '../icons/chevron-down.svelte';

	type Props = SelectPrimitive.ScrollDownButtonProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Défilement : chevron par défaut — §3 -->
<SelectPrimitive.ScrollDownButton
	{...rest}
	class={cn('flex items-center justify-center py-1 hover:bg-muted', className)}
>
	{#if children}{@render children()}{:else}<ChevronDown class="size-4" />{/if}
</SelectPrimitive.ScrollDownButton>

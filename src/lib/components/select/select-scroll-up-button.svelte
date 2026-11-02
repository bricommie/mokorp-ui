<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronUp from '../icons/chevron-up.svelte';

	type Props = SelectPrimitive.ScrollUpButtonProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Défilement : chevron par défaut — §3 -->
<SelectPrimitive.ScrollUpButton
	{...rest}
	class={cn('flex items-center justify-center py-1 hover:bg-muted', className)}
>
	{#if children}{@render children()}{:else}<ChevronUp class="size-4" />{/if}
</SelectPrimitive.ScrollUpButton>

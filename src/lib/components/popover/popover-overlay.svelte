<!--
@component
**Popover.Overlay** — Calque optionnel qui capture le clic extérieur.

[API Bits UI](https://bits-ui.com/docs/components/popover)
-->
<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PopoverPrimitive.OverlayProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Overlay de capture du clic extérieur — §3 -->
<PopoverPrimitive.Overlay {...rest} class={cn('fixed inset-0 z-40', className)} />

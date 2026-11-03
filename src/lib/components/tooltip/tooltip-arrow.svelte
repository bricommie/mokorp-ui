<!--
@component
**Tooltip.Arrow** — Flèche optionnelle, remplie avec la couleur de la bulle.

[API Bits UI](https://bits-ui.com/docs/components/tooltip)
-->
<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TooltipPrimitive.ArrowProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Flèche : épouse la surface (`fill=currentColor` → couleur du popover) — §3 -->
<TooltipPrimitive.Arrow {...rest} class={cn('text-popover', className)} />

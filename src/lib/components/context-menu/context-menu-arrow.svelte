<!--
@component
**ContextMenu.Arrow** — Flèche optionnelle qui pointe vers le déclencheur (remplie avec la couleur de la surface).

[API Bits UI](https://bits-ui.com/docs/components/context-menu)
-->
<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ContextMenuPrimitive.ArrowProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Flèche du menu : remplit la surface flottante — §3 -->
<ContextMenuPrimitive.Arrow {...rest} class={cn('fill-popover', className)} />

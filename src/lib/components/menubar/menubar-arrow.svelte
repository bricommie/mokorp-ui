<!--
@component
**Menubar.Arrow** — Flèche optionnelle qui pointe vers le déclencheur (remplie avec la couleur de la surface).

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.ArrowProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Flèche du menu : remplit la surface flottante — §3 -->
<MenubarPrimitive.Arrow {...rest} class={cn('fill-popover', className)} />

<!--
@component
**NavigationMenu.Indicator** — Soulignement `primary` qui suit l'entrée ouverte.

[API Bits UI](https://bits-ui.com/docs/components/navigation-menu)
-->
<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.IndicatorProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Indicateur : soulignement primary sous l'entrée active — §3 -->
<NavigationMenuPrimitive.Indicator
	{...rest}
	class={cn('top-full z-[1] flex h-1 items-end justify-center overflow-hidden', className)}
>
	<div class="h-1 w-full bg-indicator"></div>
</NavigationMenuPrimitive.Indicator>

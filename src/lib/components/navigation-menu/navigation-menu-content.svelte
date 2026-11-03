<!--
@component
**NavigationMenu.Content** — Panneau déroulant de l'entrée, rendu dans le `Viewport`.

[API Bits UI](https://bits-ui.com/docs/components/navigation-menu)
-->
<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Panneau de contenu (positionné dans le viewport) — §3 -->
<NavigationMenuPrimitive.Content
	{...rest}
	class={cn('w-full font-body text-sm md:absolute md:w-max', className)}
/>

<!--
@component
**NavigationMenu.Sub** — Sous-menu de navigation imbriqué dans un `Content` (sans style).

[API Bits UI](https://bits-ui.com/docs/components/navigation-menu)
-->
<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';

	type Props = NavigationMenuPrimitive.SubProps;

	let { ...rest }: Props = $props();
</script>

<!-- Sous-menu de navigation : pas de style (passthrough) — §7 -->
<NavigationMenuPrimitive.Sub {...rest} />

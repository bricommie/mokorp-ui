<!--
@component
**NavigationMenu.Item** — Une entrée du menu (`<li>`, sans style) : contient un `Link`, ou un `Trigger` + `Content`.

[API Bits UI](https://bits-ui.com/docs/components/navigation-menu)
-->
<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';

	type Props = NavigationMenuPrimitive.ItemProps;

	let { ...rest }: Props = $props();
</script>

<!-- Élément du menu de navigation : pas de style (passthrough) — §7 -->
<NavigationMenuPrimitive.Item {...rest} />

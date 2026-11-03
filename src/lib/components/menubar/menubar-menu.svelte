<!--
@component
**Menubar.Menu** — Un menu de la barre : regroupe un `Menubar.Trigger` et son `Menubar.Content`.

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';

	type Props = MenubarPrimitive.MenuProps;

	let { ...rest }: Props = $props();
</script>

<!-- Menu de la barre : pas de style (passthrough) — §7 -->
<MenubarPrimitive.Menu {...rest} />

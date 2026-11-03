<!--
@component
**Menubar.Group** — Regroupe des éléments liés (sans style). Associez-lui un `Menubar.GroupHeading`.

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';

	type Props = MenubarPrimitive.GroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe d'éléments : pas de style (passthrough) — §7 -->
<MenubarPrimitive.Group {...rest} />

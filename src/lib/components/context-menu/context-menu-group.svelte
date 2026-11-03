<!--
@component
**ContextMenu.Group** — Regroupe des éléments liés (sans style). Associez-lui un `ContextMenu.GroupHeading`.

[API Bits UI](https://bits-ui.com/docs/components/context-menu)
-->
<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.GroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe d'éléments : pas de style (passthrough) — §7 -->
<ContextMenuPrimitive.Group {...rest} />

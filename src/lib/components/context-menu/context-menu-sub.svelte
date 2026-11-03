<!--
@component
**ContextMenu.Sub** — Racine d'un **sous-menu**. Utilisable avec `bind:open`.

Anatomie : `ContextMenu.Sub` › `ContextMenu.SubTrigger` + `ContextMenu.SubContent`.

[API Bits UI](https://bits-ui.com/docs/components/context-menu)
-->
<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.SubProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<ContextMenuPrimitive.Sub bind:open {...rest} />

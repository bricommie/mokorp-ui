<!--
@component
**Menubar.Sub** — Racine d'un **sous-menu**. Utilisable avec `bind:open`.

Anatomie : `Menubar.Sub` › `Menubar.SubTrigger` + `Menubar.SubContent`.

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';

	type Props = MenubarPrimitive.SubProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<MenubarPrimitive.Sub bind:open {...rest} />

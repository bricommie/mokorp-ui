<!--
@component
**DropdownMenu.Sub** — Racine d'un **sous-menu**. Utilisable avec `bind:open`.

Anatomie : `DropdownMenu.Sub` › `DropdownMenu.SubTrigger` + `DropdownMenu.SubContent`.

[API Bits UI](https://bits-ui.com/docs/components/dropdown-menu)
-->
<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.SubProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<DropdownMenuPrimitive.Sub bind:open {...rest} />

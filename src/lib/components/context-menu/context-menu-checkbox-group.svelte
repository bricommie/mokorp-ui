<!--
@component
**ContextMenu.CheckboxGroup** — Groupe d'éléments à cocher partageant une valeur `string[]`. Utilisable avec `bind:value`.

[API Bits UI](https://bits-ui.com/docs/components/context-menu)
-->
<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.CheckboxGroupProps;

	let { value = $bindable([]), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<ContextMenuPrimitive.CheckboxGroup bind:value={value as never} {...rest} />

<!--
@component
**DropdownMenu.CheckboxGroup** — Groupe d'éléments à cocher partageant une valeur `string[]`. Utilisable avec `bind:value`.

[API Bits UI](https://bits-ui.com/docs/components/dropdown-menu)
-->
<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.CheckboxGroupProps;

	let { value = $bindable([]), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<DropdownMenuPrimitive.CheckboxGroup bind:value={value as never} {...rest} />

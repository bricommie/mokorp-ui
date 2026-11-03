<!--
@component
**DropdownMenu.RadioGroup** — Groupe d'éléments radio (choix exclusif). Utilisable avec `bind:value`.

[API Bits UI](https://bits-ui.com/docs/components/dropdown-menu)
-->
<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.RadioGroupProps;

	let { value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<DropdownMenuPrimitive.RadioGroup bind:value={value as never} {...rest} />

<!--
@component
**DropdownMenu.Group** — Regroupe des éléments liés (sans style). Associez-lui un `DropdownMenu.GroupHeading`.

[API Bits UI](https://bits-ui.com/docs/components/dropdown-menu)
-->
<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.GroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe d'éléments : pas de style (passthrough) — §7 -->
<DropdownMenuPrimitive.Group {...rest} />

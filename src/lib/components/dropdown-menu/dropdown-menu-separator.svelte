<!--
@component
**DropdownMenu.Separator** — Filet de séparation entre groupes d'éléments.

[API Bits UI](https://bits-ui.com/docs/components/dropdown-menu)
-->
<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DropdownMenuPrimitive.SeparatorProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Séparateur de menu — §3 -->
<DropdownMenuPrimitive.Separator {...rest} class={cn('-mx-1 my-1 h-0.5 bg-border', className)} />

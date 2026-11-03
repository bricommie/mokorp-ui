<!--
@component
**Menubar.Separator** — Filet de séparation entre groupes d'éléments.

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.SeparatorProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Séparateur de menu — §3 -->
<MenubarPrimitive.Separator {...rest} class={cn('-mx-1 my-1 h-0.5 bg-border', className)} />

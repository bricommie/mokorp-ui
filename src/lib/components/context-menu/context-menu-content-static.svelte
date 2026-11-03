<!--
@component
**ContextMenu.ContentStatic** — Variante de `ContextMenu.Content` **sans positionnement flottant** (pour un rendu fixe, ex. dans une doc).

[API Bits UI](https://bits-ui.com/docs/components/context-menu)
-->
<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ContextMenuPrimitive.ContentStaticProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante statique — §3 -->
<ContextMenuPrimitive.ContentStatic
	{...rest}
	class={cn(
		'rounded-surface z-50 min-w-32 overflow-hidden border-(length:--border-width) border-border-subtle bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

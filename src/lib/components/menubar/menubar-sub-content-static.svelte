<!--
@component
**Menubar.SubContentStatic** — Variante de `Menubar.SubContent` sans positionnement flottant.

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.SubContentStaticProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante statique du sous-menu — §3 -->
<MenubarPrimitive.SubContentStatic
	{...rest}
	class={cn(
		'rounded-surface z-50 min-w-32 overflow-hidden border-(length:--border-width) border-border-subtle bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

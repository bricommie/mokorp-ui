<!--
@component
**Menubar.Content** — Surface flottante du menu (à placer dans `Menubar.Portal`). `sideOffset` vaut 8 par défaut, `z-50`.

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante — §3 -->
<MenubarPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'rounded-surface z-50 min-w-32 overflow-hidden border-(length:--border-width) border-border-subtle bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

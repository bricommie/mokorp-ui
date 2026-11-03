<!--
@component
**Menubar.GroupHeading** — Étiquette d'un `Menubar.Group` (non interactive), annoncée comme nom du groupe.

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.GroupHeadingProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Étiquette de groupe — §5 -->
<MenubarPrimitive.GroupHeading
	{...rest}
	class={cn('px-2 py-1.5 font-body text-xs font-semibold text-muted-foreground', className)}
/>

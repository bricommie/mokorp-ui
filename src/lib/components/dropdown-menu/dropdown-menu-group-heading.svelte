<!--
@component
**DropdownMenu.GroupHeading** — Étiquette d'un `DropdownMenu.Group` (non interactive), annoncée comme nom du groupe.

[API Bits UI](https://bits-ui.com/docs/components/dropdown-menu)
-->
<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DropdownMenuPrimitive.GroupHeadingProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Étiquette de groupe — §5 -->
<DropdownMenuPrimitive.GroupHeading
	{...rest}
	class={cn('px-2 py-1.5 font-body text-xs font-semibold text-muted-foreground', className)}
/>

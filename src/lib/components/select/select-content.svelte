<!--
@component
**Select.Content** — Surface flottante de la liste, calée sur la largeur du déclencheur. `sideOffset` = 8 par défaut.

[API Bits UI](https://bits-ui.com/docs/components/select)
-->
<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SelectPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante — §3 -->
<SelectPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'rounded-surface relative z-50 min-w-32 w-(--bits-select-anchor-width) max-h-80 overflow-y-auto overflow-x-hidden border-(length:--border-width) border-border-subtle bg-popover p-1 text-popover-foreground shadow-lg',
		className
	)}
/>

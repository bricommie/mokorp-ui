<!--
@component
**Toolbar.GroupItem** — Une bascule du groupe. `value` **obligatoire** ; état actif en `muted`.

[API Bits UI](https://bits-ui.com/docs/components/toolbar)
-->
<script lang="ts">
	import { Toolbar as ToolbarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ToolbarPrimitive.GroupItemProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Item de groupe structurel, état actif en `bg-muted` — §5 -->
<ToolbarPrimitive.GroupItem
	{...rest}
	class={cn(
		'rounded-item inline-flex items-center justify-center gap-2 border-(length:--border-width) border-border px-2.5 py-1.5 font-body text-sm font-medium text-foreground transition-colors not-data-[state=on]:hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=on]:bg-primary data-[state=on]:text-primary-foreground disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		className
	)}
/>

<!--
@component
**ToggleGroup.Item** — Une bascule du groupe. `value` **obligatoire** ; état actif en `muted`.

[API Bits UI](https://bits-ui.com/docs/components/toggle-group)
-->
<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ToggleGroupPrimitive.ItemProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Item structurel, état actif en `bg-muted` — §5 -->
<ToggleGroupPrimitive.Item
	{...rest}
	class={cn(
		'rounded-item inline-flex items-center justify-center gap-2 -ml-0.5 border-(length:--border-width) border-border px-3 py-1.5 first:ml-0 font-body text-sm font-medium text-foreground transition-colors not-data-[state=on]:hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=on]:bg-primary data-[state=on]:text-primary-foreground disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		className
	)}
/>

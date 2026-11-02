<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ToggleGroupPrimitive.ItemProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Item structurel (coins nets), état actif en `bg-muted` — §5 -->
<ToggleGroupPrimitive.Item
	{...rest}
	class={cn(
		'inline-flex items-center justify-center gap-2 border-2 border-border px-3 py-1.5 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=on]:bg-muted disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		className
	)}
/>

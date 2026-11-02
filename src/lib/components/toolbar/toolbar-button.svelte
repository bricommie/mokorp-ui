<script lang="ts">
	import { Toolbar as ToolbarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ToolbarPrimitive.ButtonProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Bouton structurel (coins nets) — §5 -->
<ToolbarPrimitive.Button
	{...rest}
	class={cn(
		'inline-flex items-center justify-center gap-2 border-2 border-transparent px-2.5 py-1.5 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		className
	)}
/>

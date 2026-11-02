<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CollapsiblePrimitive.TriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Déclencheur structurel — §5 -->
<CollapsiblePrimitive.Trigger
	{...rest}
	class={cn(
		'inline-flex items-center justify-center gap-2 rounded-control border-(length:--border-width) border-input bg-background px-4 py-2 font-body text-sm font-semibold text-foreground transition-[transform,background-color] hover:bg-muted active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
		className
	)}
/>

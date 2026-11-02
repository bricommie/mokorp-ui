<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CollapsiblePrimitive.TriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Déclencheur structurel (coins nets) — §5 -->
<CollapsiblePrimitive.Trigger
	{...rest}
	class={cn(
		'inline-flex items-center justify-center gap-2 border-2 border-border bg-background px-4 py-2 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
		className
	)}
/>

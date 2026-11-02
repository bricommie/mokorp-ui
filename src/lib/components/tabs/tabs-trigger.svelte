<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TabsPrimitive.TriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Onglet : soulignement primary à l'état actif — §5 -->
<TabsPrimitive.Trigger
	{...rest}
	class={cn(
		'shrink-0 whitespace-nowrap border-b-(length:--border-width) border-transparent px-4 py-2 font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=active]:border-foreground data-[state=active]:font-semibold data-[state=active]:text-foreground disabled:pointer-events-none disabled:opacity-50',
		className
	)}
/>

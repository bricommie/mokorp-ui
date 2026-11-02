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
		'border-b-2 border-transparent px-4 py-2 font-body text-sm text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=active]:border-primary data-[state=active]:text-foreground disabled:pointer-events-none disabled:opacity-50',
		className
	)}
/>

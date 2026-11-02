<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CollapsiblePrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<CollapsiblePrimitive.Content
	{...rest}
	class={cn(
		'overflow-hidden font-body text-sm text-foreground data-[state=closed]:animate-[mk-collapsible-up_150ms_ease-out] data-[state=open]:animate-[mk-collapsible-down_150ms_ease-out] motion-reduce:animate-none',
		className
	)}
/>

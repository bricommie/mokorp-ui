<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CollapsiblePrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<CollapsiblePrimitive.Content
	{...rest}
	class={cn('overflow-hidden font-body text-sm text-foreground', className)}
/>

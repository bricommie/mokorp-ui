<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AccordionPrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<AccordionPrimitive.Content
	{...rest}
	class={cn('overflow-hidden font-body text-sm text-foreground', className)}
/>

<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AccordionPrimitive.ItemProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Structurel (coins nets) + séparateur encre 2px — §5 -->
<AccordionPrimitive.Item {...rest} class={cn('border-b-2 border-border', className)} />

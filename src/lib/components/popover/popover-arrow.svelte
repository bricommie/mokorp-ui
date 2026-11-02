<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PopoverPrimitive.ArrowProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Flèche du popover : remplit la surface flottante — §3 -->
<PopoverPrimitive.Arrow {...rest} class={cn('fill-popover', className)} />
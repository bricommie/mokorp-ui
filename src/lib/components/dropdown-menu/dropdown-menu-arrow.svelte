<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DropdownMenuPrimitive.ArrowProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Flèche du menu : remplit la surface flottante — §3 -->
<DropdownMenuPrimitive.Arrow {...rest} class={cn('fill-popover', className)} />
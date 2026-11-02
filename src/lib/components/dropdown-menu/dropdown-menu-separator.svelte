<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DropdownMenuPrimitive.SeparatorProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Séparateur de menu — §3 -->
<DropdownMenuPrimitive.Separator {...rest} class={cn('h-px bg-border my-1', className)} />
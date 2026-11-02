<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ContextMenuPrimitive.SeparatorProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Séparateur de menu — §3 -->
<ContextMenuPrimitive.Separator {...rest} class={cn('-mx-1 my-1 h-0.5 bg-border', className)} />

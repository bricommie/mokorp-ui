<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ScrollAreaPrimitive.CornerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Coin (intersection des deux barres) — §5 -->
<ScrollAreaPrimitive.Corner {...rest} class={cn('bg-border', className)} />

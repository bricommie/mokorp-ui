<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ScrollAreaPrimitive.ViewportProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Viewport : remplit la racine pour activer le défilement — §7 -->
<ScrollAreaPrimitive.Viewport {...rest} class={cn('h-full w-full', className)} />

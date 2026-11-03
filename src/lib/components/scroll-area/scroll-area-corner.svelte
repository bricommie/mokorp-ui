<!--
@component
**ScrollArea.Corner** — Coin à l'intersection des deux barres (quand les deux sont présentes).

[API Bits UI](https://bits-ui.com/docs/components/scroll-area)
-->
<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ScrollAreaPrimitive.CornerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Coin (intersection des deux barres) — §5 -->
<ScrollAreaPrimitive.Corner {...rest} class={cn('bg-border', className)} />

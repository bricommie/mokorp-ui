<!--
@component
**ScrollArea.Thumb** — Curseur de la barre de défilement.

[API Bits UI](https://bits-ui.com/docs/components/scroll-area)
-->
<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ScrollAreaPrimitive.ThumbProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Pouce de défilement structurel — §5 -->
<ScrollAreaPrimitive.Thumb {...rest} class={cn('relative flex-1 bg-border', className)} />

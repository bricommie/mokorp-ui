<!--
@component
**ScrollArea.Scrollbar** — Barre de défilement (`orientation="vertical"` ou `"horizontal"`). Contient un `Thumb`.

[API Bits UI](https://bits-ui.com/docs/components/scroll-area)
-->
<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ScrollAreaPrimitive.ScrollbarProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Barre de défilement structurelle — §5 -->
<ScrollAreaPrimitive.Scrollbar
	{...rest}
	class={cn(
		'flex touch-none select-none p-0.5 transition-colors data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-col',
		className
	)}
/>

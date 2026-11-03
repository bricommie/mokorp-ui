<!--
@component
**LinkPreview.Arrow** — Flèche optionnelle, remplie avec la couleur de la surface.

[API Bits UI](https://bits-ui.com/docs/components/link-preview)
-->
<script lang="ts">
	import { LinkPreview as LinkPreviewPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = LinkPreviewPrimitive.ArrowProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Flèche : épouse la surface (`fill=currentColor` → couleur du popover) — §3 -->
<LinkPreviewPrimitive.Arrow {...rest} class={cn('text-popover', className)} />

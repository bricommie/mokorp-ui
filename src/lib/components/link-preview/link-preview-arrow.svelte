<script lang="ts">
	import { LinkPreview as LinkPreviewPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = LinkPreviewPrimitive.ArrowProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Flèche : épouse la surface (`fill=currentColor` → couleur du popover) — §3 -->
<LinkPreviewPrimitive.Arrow {...rest} class={cn('text-popover', className)} />

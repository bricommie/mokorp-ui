<!--
@component
**LinkPreview.Content** — Surface flottante de l'aperçu. `sideOffset` = 8 par défaut.

[API Bits UI](https://bits-ui.com/docs/components/link-preview)
-->
<script lang="ts">
	import { LinkPreview as LinkPreviewPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = LinkPreviewPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante (rounded-surface) — §3 -->
<LinkPreviewPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'rounded-surface z-50 border-(length:--border-width) border-border-subtle bg-popover p-4 font-body text-sm text-popover-foreground shadow-lg',
		className
	)}
/>

<script lang="ts">
	import { LinkPreview as LinkPreviewPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = LinkPreviewPrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante (structurel, coins nets) — §3 -->
<LinkPreviewPrimitive.Content
	{...rest}
	class={cn(
		'border-2 border-border bg-popover p-4 font-body text-sm text-popover-foreground shadow-lg',
		className
	)}
/>

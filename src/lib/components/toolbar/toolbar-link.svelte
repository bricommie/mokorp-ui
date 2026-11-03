<!--
@component
**Toolbar.Link** — Lien de la barre (`href`), même gabarit qu'un `Toolbar.Button`.

[API Bits UI](https://bits-ui.com/docs/components/toolbar)
-->
<script lang="ts">
	import { Toolbar as ToolbarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ToolbarPrimitive.LinkProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Lien structurel — §5 -->
<ToolbarPrimitive.Link
	{...rest}
	class={cn(
		'rounded-item inline-flex items-center justify-center gap-2 border-(length:--border-width) border-transparent px-2.5 py-1.5 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		className
	)}
/>

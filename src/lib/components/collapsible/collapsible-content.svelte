<!--
@component
**Collapsible.Content** — Contenu repliable, masqué quand le bloc est fermé.

[API Bits UI](https://bits-ui.com/docs/components/collapsible)
-->
<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CollapsiblePrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<CollapsiblePrimitive.Content
	{...rest}
	class={cn(
		'overflow-hidden font-body text-sm text-foreground data-[state=closed]:animate-[mk-collapsible-up_var(--duration-fast)_var(--ease-standard)] data-[state=open]:animate-[mk-collapsible-down_var(--duration-fast)_var(--ease-standard)] motion-reduce:animate-none',
		className
	)}
/>

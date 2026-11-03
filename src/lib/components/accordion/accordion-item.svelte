<!--
@component
**Accordion.Item** — Une section de l'accordéon. `value` l'identifie (sinon générée) ; `disabled` la verrouille.

[API Bits UI](https://bits-ui.com/docs/components/accordion)
-->
<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AccordionPrimitive.ItemProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Structurel + séparateur bordure `--border-width` — §5 -->
<AccordionPrimitive.Item
	{...rest}
	class={cn('border-b-(length:--border-width) border-border-subtle', className)}
/>

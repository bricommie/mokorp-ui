<!--
@component
**Accordion.Content** — Contenu de la section. Hauteur animée à l'ouverture (neutralisée en mouvement réduit).

[API Bits UI](https://bits-ui.com/docs/components/accordion)
-->
<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AccordionPrimitive.ContentProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Contenu : hauteur animée (réponse à l'action), padding interne séparé du clip — §7 -->
<AccordionPrimitive.Content
	{...rest}
	class="overflow-hidden font-body text-sm text-foreground data-[state=closed]:animate-[mk-collapse-up_var(--duration-fast)_var(--ease-standard)] data-[state=open]:animate-[mk-collapse-down_var(--duration-fast)_var(--ease-standard)] motion-reduce:animate-none"
>
	<div class={cn('pb-4', className)}>
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>

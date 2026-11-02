<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AccordionPrimitive.ContentProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Contenu : hauteur animée (réponse à l'action), padding interne séparé du clip — §7 -->
<AccordionPrimitive.Content
	{...rest}
	class="overflow-hidden font-body text-sm text-foreground data-[state=closed]:animate-[mk-collapse-up_150ms_ease-out] data-[state=open]:animate-[mk-collapse-down_150ms_ease-out] motion-reduce:animate-none"
>
	<div class={cn('pb-4', className)}>
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>

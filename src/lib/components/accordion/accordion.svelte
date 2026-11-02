<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	type Props = AccordionPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<AccordionPrimitive.Root {...rest} />

<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	type Props = AccordionPrimitive.HeaderProps;

	let { ...rest }: Props = $props();
</script>

<!-- En-tête sémantique : pas de style (passthrough) — §7 -->
<AccordionPrimitive.Header {...rest} />

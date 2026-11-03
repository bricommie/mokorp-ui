<!--
@component
**Accordion.Header** — Titre sémantique de la section (`<h3>` par défaut, `level` pour changer). Contient le `Trigger`.

[API Bits UI](https://bits-ui.com/docs/components/accordion)
-->
<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	type Props = AccordionPrimitive.HeaderProps;

	let { ...rest }: Props = $props();
</script>

<!-- En-tête sémantique : pas de style (passthrough) — §7 -->
<AccordionPrimitive.Header {...rest} />

<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	type Props = AccordionPrimitive.RootProps;

	let { value = $bindable(), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<AccordionPrimitive.Root bind:value={value as never} {...rest} />

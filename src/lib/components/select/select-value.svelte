<!--
@component
**Select.Value** — Affiche la valeur sélectionnée, ou `placeholder` tant que rien n'est choisi.

[API Bits UI](https://bits-ui.com/docs/components/select)
-->
<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	type Props = SelectPrimitive.ValueProps;

	let { ...rest }: Props = $props();
</script>

<!-- Valeur sélectionnée : pas de style (passthrough) — §7 -->
<SelectPrimitive.Value {...rest} />

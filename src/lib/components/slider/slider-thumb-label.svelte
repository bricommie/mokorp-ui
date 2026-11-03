<!--
@component
**Slider.ThumbLabel** — Étiquette attachée à une poignée (valeur courante, par ex.).

[API Bits UI](https://bits-ui.com/docs/components/slider)
-->
<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';

	type Props = SliderPrimitive.ThumbLabelProps;

	let { ...rest }: Props = $props();
</script>

<!-- Étiquette de pouce : pas de style (passthrough) — §7 -->
<SliderPrimitive.ThumbLabel {...rest} />

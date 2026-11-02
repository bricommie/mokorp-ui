<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';

	type Props = SliderPrimitive.TickLabelProps;

	let { ...rest }: Props = $props();
</script>

<!-- Étiquette de repère : pas de style (passthrough) — §7 -->
<SliderPrimitive.TickLabel {...rest} />

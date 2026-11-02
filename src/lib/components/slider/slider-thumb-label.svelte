<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';

	type Props = SliderPrimitive.ThumbLabelProps;

	let { ...rest }: Props = $props();
</script>

<!-- Étiquette de pouce : pas de style (passthrough) — §7 -->
<SliderPrimitive.ThumbLabel {...rest} />

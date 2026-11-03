<!--
@component
**Slider.Range** — Portion remplie (`primary`) de la piste.

[API Bits UI](https://bits-ui.com/docs/components/slider)
-->
<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SliderPrimitive.RangeProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Remplissage primary — §5 -->
<SliderPrimitive.Range
	{...rest}
	class={cn('absolute h-full bg-indicator data-[orientation=vertical]:w-full', className)}
/>

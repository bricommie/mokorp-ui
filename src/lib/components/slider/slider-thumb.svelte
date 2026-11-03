<!--
@component
**Slider.Thumb** — Poignée déplaçable. `index` (**obligatoire**) : position dans `value`. Donnez-lui un `aria-label`.

[API Bits UI](https://bits-ui.com/docs/components/slider)
-->
<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SliderPrimitive.ThumbProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Pouce organique (rounded-pill) + bordure `--border-width` — §3 / §4 -->
<SliderPrimitive.Thumb
	{...rest}
	class={cn(
		'block size-5 shrink-0 rounded-pill border-(length:--border-width) border-border bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
/>

<!--
@component
**Slider.Tick** — Repère visuel sur la piste (un point par pas). `index` obligatoire.

[API Bits UI](https://bits-ui.com/docs/components/slider)
-->
<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SliderPrimitive.TickProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Repère discret (point) — §4 -->
<SliderPrimitive.Tick {...rest} class={cn('block size-1.5 rounded-pill bg-border', className)} />

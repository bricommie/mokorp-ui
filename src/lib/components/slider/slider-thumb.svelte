<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SliderPrimitive.ThumbProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Pouce organique (rounded-full) + encre 2px — §3 / §4 -->
<SliderPrimitive.Thumb
	{...rest}
	class={cn(
		'block size-5 shrink-0 rounded-full border-2 border-border bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
/>

<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SliderPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Piste : conteneur relatif, désélection + tactile — §4 -->
<SliderPrimitive.Root
	{...rest}
	class={cn(
		'relative flex h-1.5 w-full touch-none select-none items-center bg-muted data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5 data-[orientation=vertical]:flex-col',
		className
	)}
/>

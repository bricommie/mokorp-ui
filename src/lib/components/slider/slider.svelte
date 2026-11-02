<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SliderPrimitive.RootProps;

	let { class: className, value = $bindable(), ...rest }: Props = $props();
</script>

<!-- Piste : conteneur relatif, désélection + tactile — §4 -->
<SliderPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn(
		'relative flex h-3 w-full touch-none select-none items-center border-2 border-border bg-muted data-[orientation=vertical]:h-full data-[orientation=vertical]:w-3 data-[orientation=vertical]:flex-col',
		className
	)}
/>

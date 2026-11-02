<script lang="ts">
	import { Switch as SwitchPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SwitchPrimitive.ThumbProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Pouce organique (rounded-full) + encre 2px — §3 / §4 -->
<SwitchPrimitive.Thumb
	{...rest}
	class={cn(
		'pointer-events-none block h-5 w-5 rounded-full border-2 border-border bg-background ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
		className
	)}
/>

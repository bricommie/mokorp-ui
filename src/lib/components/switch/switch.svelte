<script lang="ts">
	import { Switch as SwitchPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SwitchPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Piste organique (rounded-full) — primary coché, background sinon — §4 / §5 -->
<SwitchPrimitive.Root
	{...rest}
	class={cn(
		'inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-border bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[state=checked]:bg-primary',
		className
	)}
/>

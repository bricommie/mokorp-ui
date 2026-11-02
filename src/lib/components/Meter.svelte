<script lang="ts">
	import { Meter as MeterPrimitive } from 'bits-ui';
	import { cn } from '../cn.js';

	type Props = MeterPrimitive.RootProps;

	let { value = 0, max = 100, class: className, children, ...rest }: Props = $props();

	const percent = $derived(Math.min(100, Math.max(0, (value / max) * 100)));
</script>

<!-- Structurel (coins nets) + piste encre + barre primary — §4 / §5 -->
<MeterPrimitive.Root
	{value}
	{max}
	{...rest}
	class={cn('relative h-2 w-full overflow-hidden border-2 border-border bg-muted', className)}
>
	{@render children?.()}
	<div class="h-full bg-primary transition-all" style:width={`${percent}%`}></div>
</MeterPrimitive.Root>

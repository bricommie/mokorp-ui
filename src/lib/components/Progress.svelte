<script lang="ts">
	import { Progress as ProgressPrimitive } from 'bits-ui';
	import { cn } from '../cn.js';

	type Props = ProgressPrimitive.RootProps;

	let { value = 0, max = 100, class: className, children, ...rest }: Props = $props();

	// Pourcentage borné 0–100 ; `null` = état indéterminé (barre non rendue).
	const percent = $derived(
		value === null ? null : Math.min(100, Math.max(0, (value / max) * 100))
	);
</script>

<!-- Piste organique (rounded-full) + barre primary — §4 / §5 -->
<ProgressPrimitive.Root
	{value}
	{max}
	{...rest}
	class={cn(
		'relative h-2 w-full overflow-hidden rounded-full border-2 border-border bg-muted',
		className
	)}
>
	{@render children?.()}
	{#if percent !== null}
		<div
			class="h-full w-full flex-1 rounded-full bg-primary transition-all"
			style:transform={`translateX(-${100 - percent}%)`}
		></div>
	{/if}
</ProgressPrimitive.Root>

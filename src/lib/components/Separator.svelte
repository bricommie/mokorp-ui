<script lang="ts">
	import { Separator as SeparatorPrimitive } from 'bits-ui';
	import { cn } from '../cn.js';

	type Props = SeparatorPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Structurel + ligne bordure `--border-width`, orientation via data-orientation — §4 -->
<SeparatorPrimitive.Root
	{...rest}
	class={cn(
		'shrink-0 bg-border data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0.5',
		className
	)}
/>

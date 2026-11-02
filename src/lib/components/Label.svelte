<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Label as LabelPrimitive } from 'bits-ui';
	import { cn } from '../cn.js';

	type Props = LabelPrimitive.RootProps & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Motif signature — §6 : font-mono · text-xs · uppercase · tracking-[0.08em] -->
<LabelPrimitive.Root {...rest} class={cn('font-mono text-xs uppercase tracking-[0.08em]', className)}>
	{@render children?.()}
</LabelPrimitive.Root>

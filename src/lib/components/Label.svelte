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

<!-- Motif Label — §6 : Archivo semi-gras, casse normale -->
<LabelPrimitive.Root {...rest} class={cn('font-body text-sm font-semibold', className)}>
	{@render children?.()}
</LabelPrimitive.Root>

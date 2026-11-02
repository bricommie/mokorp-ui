<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';

	type Props = Omit<HTMLLabelAttributes, 'class'> & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Motif signature — §6 : font-mono · text-xs · uppercase · tracking-[0.08em] -->
<label {...rest} class={cn('font-mono text-xs uppercase tracking-[0.08em]', className)}>
	{@render children?.()}
</label>

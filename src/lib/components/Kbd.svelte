<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';

	type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Touche de clavier (structurel, coins nets) — font-mono — §6 -->
<kbd
	{...rest}
	class={cn(
		'inline-flex h-6 min-w-6 items-center justify-center border-2 border-border bg-card px-1.5 font-mono text-xs font-semibold text-card-foreground shadow-xs',
		className
	)}
>
	{@render children?.()}
</kbd>

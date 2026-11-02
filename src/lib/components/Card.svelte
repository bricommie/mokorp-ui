<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Structurel + bordure bordure `--border-width` + ombre d'élévation — §5 / §7 -->
<div
	{...rest}
	class={cn(
		'rounded-surface border-(length:--border-width) border-border-subtle bg-card text-card-foreground shadow-md',
		className
	)}
>
	{@render children?.()}
</div>

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

<!-- Structurel (coins nets) + bordure encre 2px + ombre d'élévation — §5 / §7 -->
<div
	{...rest}
	class={cn('border-2 border-border bg-card text-card-foreground shadow-md', className)}
>
	{@render children?.()}
</div>

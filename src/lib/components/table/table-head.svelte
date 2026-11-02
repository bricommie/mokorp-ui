<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<th
	{...rest}
	class={cn(
		'h-10 px-3 text-left align-middle font-mono text-xs font-semibold uppercase tracking-[0.08em]',
		className
	)}
>
	{@render children?.()}
</th>

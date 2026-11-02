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

<tr
	{...rest}
	class={cn(
		'border-b-2 border-border transition-colors hover:bg-muted/60 data-[state=selected]:bg-muted',
		className
	)}
>
	{@render children?.()}
</tr>

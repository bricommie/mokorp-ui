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

<caption
	{...rest}
	class={cn(
		'border-t-(length:--border-width) border-border-subtle px-3 py-2.5 text-left font-serif text-sm italic text-muted-foreground',
		className
	)}
>
	{@render children?.()}
</caption>

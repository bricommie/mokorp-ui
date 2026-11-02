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

<tfoot
	{...rest}
	class={cn(
		'border-t-(length:--border-width) border-border-subtle bg-muted font-semibold',
		className
	)}
>
	{@render children?.()}
</tfoot>

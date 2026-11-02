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

<thead
	{...rest}
	class={cn('[&_tr]:border-b-(length:--border-width) [&_tr]:border-border-subtle', className)}
>
	{@render children?.()}
</thead>

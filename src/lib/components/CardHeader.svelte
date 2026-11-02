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

<div {...rest} class={cn('flex flex-col gap-1.5 p-5', className)}>
	{@render children?.()}
</div>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- En-tête : titre + description empilés — §7 -->
<div {...rest} class={cn('flex flex-col gap-1.5 pr-8 text-left', className)}>
	{@render children?.()}
</div>

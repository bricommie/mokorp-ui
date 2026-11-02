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

<!-- Pied : actions alignées à droite, empilées sur mobile — §7 -->
<div {...rest} class={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}>
	{@render children?.()}
</div>

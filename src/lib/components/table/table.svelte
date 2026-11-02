<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLTableAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<HTMLTableAttributes, 'class'> & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Conteneur défilant (structurel) : bordure encre autour, table pleine largeur — §5 -->
<div class="relative w-full overflow-x-auto border-2 border-border bg-card text-card-foreground">
	<table {...rest} class={cn('w-full caption-bottom border-collapse font-body text-sm', className)}>
		{@render children?.()}
	</table>
</div>

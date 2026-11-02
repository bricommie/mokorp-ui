<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'> & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Raccourci clavier aligné à droite (hérite la couleur de l'item) — §6 -->
<span {...rest} class={cn('ml-auto font-mono text-xs tracking-[0.08em] opacity-70', className)}>
	{@render children?.()}
</span>

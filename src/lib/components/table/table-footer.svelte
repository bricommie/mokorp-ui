<!--
@component
**Table.Footer** — Pied du tableau (`<tfoot>`) : totaux, synthèse.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
		/** Contenu. */
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

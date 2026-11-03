<!--
@component
**Table.Row** — Ligne (`<tr>`), survol en `muted`.
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

<tr
	{...rest}
	class={cn(
		'border-b-(length:--border-width) border-border-subtle transition-colors hover:bg-muted/60 data-[state=selected]:bg-muted',
		className
	)}
>
	{@render children?.()}
</tr>

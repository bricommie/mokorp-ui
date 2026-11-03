<!--
@component
**CardFooter** — Pied d'une `Card` : actions alignées en ligne.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';

	type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
		/** Contenu. */
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<div
	{...rest}
	class={cn(
		'flex items-center gap-2 border-t-(length:--border-width) border-border-subtle p-4',
		className
	)}
>
	{@render children?.()}
</div>

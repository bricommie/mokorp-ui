<!--
@component
**CardDescription** — Texte secondaire d'une `Card`, sous le titre (`muted-foreground`).
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

<p {...rest} class={cn('font-body text-sm text-muted-foreground', className)}>
	{@render children?.()}
</p>

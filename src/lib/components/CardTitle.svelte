<!--
@component
**CardTitle** — Titre d'une `Card` (typographie display). Rendu en `<h3>` : adaptez le niveau à la page via le contenu si besoin.
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

<h3 {...rest} class={cn('font-display text-xl font-bold leading-tight', className)}>
	{@render children?.()}
</h3>

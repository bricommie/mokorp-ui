<!--
@component
**Kbd** — Affiche une **touche** ou un raccourci clavier (`⌘` `K`). Une touche par `Kbd`.

```svelte
<Kbd>⌘</Kbd> <Kbd>K</Kbd>
```
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

<!-- Touche de clavier (rounded-surface) — font-mono — §6 -->
<kbd
	{...rest}
	class={cn(
		'rounded-item inline-flex h-6 min-w-6 items-center justify-center border-(length:--border-width) border-border bg-card px-1.5 font-mono text-xs font-semibold text-card-foreground shadow-xs',
		className
	)}
>
	{@render children?.()}
</kbd>

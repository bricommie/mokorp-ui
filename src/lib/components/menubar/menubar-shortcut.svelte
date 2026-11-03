<!--
@component
**Menubar.Shortcut** — Raccourci clavier affiché à droite d'un item (purement visuel : le raccourci lui-même est à implémenter).

```svelte
<Menubar.Item>Copier <Menubar.Shortcut>⌘C</Menubar.Shortcut></Menubar.Item>
```

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'> & {
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
		/** Contenu. */
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Raccourci clavier aligné à droite (hérite la couleur de l'item) — §6 -->
<span {...rest} class={cn('ml-auto font-mono text-xs tracking-[0.08em] opacity-70', className)}>
	{@render children?.()}
</span>

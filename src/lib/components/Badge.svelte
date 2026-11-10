<!--
@component
**Badge** — Étiquette courte de **statut** ou de catégorie (« Publié », « Bêta »). Non interactif : pour une action, utilisez `Button`.

- `variant` : `primary` (défaut) · `secondary` · `outline` · `highlight` · `success` · `warning` · `destructive`.

`highlight` sert aux catégories et tags (« Annonce », « Guide ») : il ne ressemble pas à une action.

**Accessibilité** : le texte porte le sens, pas la couleur seule (« Échec », pas un badge rouge vide).

```svelte
<Badge variant="success">Publié</Badge>
```
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';
	import { badgeVariants, type BadgeVariant } from './badge.js';

	type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'> & {
		/**
		 * Ton du badge : `primary`, `secondary`, `outline`, `highlight` (catégorie, tag),
		 * `success`, `warning`, `destructive`. Le texte doit porter le sens, pas la
		 * couleur seule.
		 * @default 'primary'
		 */
		variant?: BadgeVariant;
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
		/** Texte du badge. */
		children?: Snippet;
	};

	let { variant = 'primary', class: className, children, ...rest }: Props = $props();
</script>

<span {...rest} class={cn(badgeVariants({ variant }), className)}>
	{@render children?.()}
</span>

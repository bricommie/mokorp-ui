<!--
@component
**Skeleton** — Gabarit de **chargement** qui réserve la place du contenu à venir (évite les sauts de mise en page). Sa forme vient de `class` (taille, rayon) ; la pulsation est coupée en mouvement réduit.

**Accessibilité** : décoratif ; signalez le chargement sur le conteneur avec `aria-busy="true"`.

```svelte
<div aria-busy="true">
	<Skeleton class="h-4 w-48" />
</div>
```
-->
<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
	};

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Placeholder de chargement : bloc muted qui pulse (animation coupée si mouvement réduit) -->
<div
	aria-hidden="true"
	{...rest}
	class={cn(
		'rounded-item animate-pulse border-(length:--border-width) border-border bg-muted motion-reduce:animate-none',
		className
	)}
></div>

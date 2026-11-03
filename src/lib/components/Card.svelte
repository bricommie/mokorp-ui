<!--
@component
**Card** — Surface qui regroupe un contenu autonome (résumé, formulaire court).

**Anatomie** (optionnelle) : `Card` › `CardHeader` (`CardTitle` · `CardDescription`) · `CardContent` · `CardFooter`.

Une carte n'est pas cliquable en entier : placez un lien ou un bouton explicite à l'intérieur.

```svelte
<Card>
	<CardHeader>
		<CardTitle>Abonnement</CardTitle>
		<CardDescription>Renouvelé le 1er de chaque mois.</CardDescription>
	</CardHeader>
	<CardContent>…</CardContent>
	<CardFooter><Button>Gérer</Button></CardFooter>
</Card>
```
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
		/** Contenu. */
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Structurel + bordure bordure `--border-width` + ombre d'élévation — §5 / §7 -->
<div
	{...rest}
	class={cn(
		'rounded-surface border-(length:--border-width) border-border-subtle bg-card text-card-foreground shadow-md',
		className
	)}
>
	{@render children?.()}
</div>

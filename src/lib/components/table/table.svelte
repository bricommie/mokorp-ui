<!--
@component
**Table.Root** — Tableau de **données** (pas de mise en page). Parties stylées, structure HTML native ; le conteneur défile horizontalement si besoin.

**Anatomie** : `Table.Root` › `Table.Caption` · `Table.Header` › `Table.Row` › `Table.Head` ; `Table.Body` › `Table.Row` › `Table.Cell` ; `Table.Footer`.

**Accessibilité** : un `Caption` décrit le tableau ; les nombres s'alignent à droite (`class="text-right"`).

```svelte
<Table.Root>
	<Table.Caption>Factures récentes</Table.Caption>
	<Table.Header>
		<Table.Row><Table.Head>N°</Table.Head><Table.Head class="text-right">Montant</Table.Head></Table.Row>
	</Table.Header>
	<Table.Body>
		<Table.Row><Table.Cell>F-001</Table.Cell><Table.Cell class="text-right">120 €</Table.Cell></Table.Row>
	</Table.Body>
</Table.Root>
```
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLTableAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<HTMLTableAttributes, 'class'> & {
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
		/** Contenu. */
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Conteneur défilant (structurel) : bordure encre autour, table pleine largeur — §5 -->
<div
	class="rounded-surface relative w-full overflow-x-auto border-(length:--border-width) border-border-subtle bg-card text-card-foreground"
>
	<table {...rest} class={cn('w-full caption-bottom border-collapse font-body text-sm', className)}>
		{@render children?.()}
	</table>
</div>

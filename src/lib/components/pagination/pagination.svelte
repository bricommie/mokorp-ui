<!--
@component
**Pagination.Root** — Navigation entre les **pages d'une liste** (résultats, tableau).

**Anatomie** : `Pagination.Root` (snippet `children` avec `pages`) › `Pagination.PrevButton` · `Pagination.Page` (une par page, ou ellipse) · `Pagination.NextButton`.

- `count` (**obligatoire**) : nombre total d'éléments ; `perPage` : éléments par page.
- `bind:page` : page courante (commence à 1).

**Accessibilité** : la page courante porte `aria-current="page"`. Donnez un `aria-label` au Root.

```svelte
<Pagination.Root count={120} perPage={10} bind:page aria-label="Pagination des résultats">
	{#snippet children({ pages })}
		<Pagination.PrevButton />
		{#each pages as p (p.key)}
			{#if p.type === 'page'}<Pagination.Page page={p}>{p.value}</Pagination.Page>{:else}…{/if}
		{/each}
		<Pagination.NextButton />
	{/snippet}
</Pagination.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/pagination)
-->
<script lang="ts">
	import { Pagination as PaginationPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PaginationPrimitive.RootProps;

	let { class: className, page = $bindable(1), ...rest }: Props = $props();
</script>

<!-- Conteneur organique (items pill) — §5 -->
<PaginationPrimitive.Root
	bind:page
	{...rest}
	class={cn('inline-flex flex-wrap items-center gap-1', className)}
/>

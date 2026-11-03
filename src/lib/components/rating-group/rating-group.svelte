<!--
@component
**RatingGroup.Root** — Note sur une échelle (étoiles). L'état sélectionné ne repose pas sur la couleur : remplissage **plein** vs **contour**.

**Anatomie** : `RatingGroup.Root` (snippet `children` avec `items`) › `RatingGroup.Item`.

- `max` : nombre d'étoiles. `bind:value` : la note. `allowHalf` : demi-étoiles.

```svelte
<RatingGroup.Root bind:value max={5} aria-label="Note">
	{#snippet children({ items })}
		{#each items as item (item.index)}<RatingGroup.Item index={item.index} />{/each}
	{/snippet}
</RatingGroup.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/rating-group)
-->
<script lang="ts">
	import { RatingGroup as RatingGroupPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RatingGroupPrimitive.RootProps;

	let { class: className, value = $bindable(0), ...rest }: Props = $props();
</script>

<!-- Structurel — rangée d'étoiles — §4 -->
<RatingGroupPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn('inline-flex items-center gap-1', className)}
/>

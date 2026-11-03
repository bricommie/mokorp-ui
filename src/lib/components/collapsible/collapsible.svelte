<!--
@component
**Collapsible.Root** — **Un** bloc repliable isolé (« Afficher plus »). Pour une liste de sections, utilisez `Accordion`.

**Anatomie** : `Collapsible.Root` › `Collapsible.Trigger` · `Collapsible.Content`. Utilisable avec `bind:open`.

```svelte
<Collapsible.Root bind:open>
	<Collapsible.Trigger>Voir les détails</Collapsible.Trigger>
	<Collapsible.Content>…</Collapsible.Content>
</Collapsible.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/collapsible)
-->
<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';

	type Props = CollapsiblePrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<CollapsiblePrimitive.Root bind:open {...rest} />

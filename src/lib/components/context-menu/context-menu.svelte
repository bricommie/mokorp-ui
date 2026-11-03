<!--
@component
**ContextMenu.Root** — Menu ouvert au **clic droit** (ou appui long) sur une zone. Comme il est invisible, ses actions doivent **aussi** exister ailleurs dans l'interface.

**Anatomie** : `ContextMenu.Root` › `Trigger` (la zone) ; `Portal` › `Content` › mêmes parties que `DropdownMenu`. Utilisable avec `bind:open`.

```svelte
<ContextMenu.Root>
	<ContextMenu.Trigger class="rounded-surface border p-8">Clic droit ici</ContextMenu.Trigger>
	<ContextMenu.Portal>
		<ContextMenu.Content>
			<ContextMenu.Item>Renommer</ContextMenu.Item>
		</ContextMenu.Content>
	</ContextMenu.Portal>
</ContextMenu.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/context-menu)
-->
<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<ContextMenuPrimitive.Root bind:open {...rest} />

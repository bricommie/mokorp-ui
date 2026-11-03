<!--
@component
**Popover.Root** — Surface flottante **non modale** ancrée à un déclencheur : réglages rapides, formulaire court. Pour une simple aide au survol, utilisez `Tooltip`.

**Anatomie** : `Popover.Root` › `Popover.Trigger` ; `Popover.Portal` › `Popover.Content` (+ `Popover.Arrow`, `Popover.Close`). Utilisable avec `bind:open`.

**Accessibilité** : Échap ferme et rend le focus au déclencheur ; `aria-expanded` est géré.

```svelte
<Popover.Root>
	<Popover.Trigger>Filtres</Popover.Trigger>
	<Popover.Portal>
		<Popover.Content>…</Popover.Content>
	</Popover.Portal>
</Popover.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/popover)
-->
<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';

	type Props = PopoverPrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<PopoverPrimitive.Root bind:open {...rest} />

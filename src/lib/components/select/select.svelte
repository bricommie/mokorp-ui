<!--
@component
**Select.Root** — Choix d'une option dans une **liste fermée** (pays, statut). Pour plus de ~10 options ou une recherche, préférez `Combobox`.

**Anatomie** : `Select.Root` › `Select.Trigger` › `Select.Value` ; `Select.Portal` › `Select.Content` › `Select.Group` › `Select.GroupHeading` · `Select.Item` (coche intégrée, prop `label`).

- `type` (**obligatoire**) : `"single"` ou `"multiple"`. `bind:value`, `bind:open`.
- `items` : liste `{ value, label }` (active la saisie d'une lettre pour sauter).

**Accessibilité** : clavier complet (flèches, lettre, Entrée, Échap). Associez un `Label` au déclencheur.

```svelte
<Select.Root type="single" bind:value {items}>
	<Select.Trigger><Select.Value placeholder="Choisir un statut" /></Select.Trigger>
	<Select.Portal>
		<Select.Content>
			{#each items as it (it.value)}<Select.Item value={it.value} label={it.label} />{/each}
		</Select.Content>
	</Select.Portal>
</Select.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/select)
-->
<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	type Props = SelectPrimitive.RootProps;

	let { value = $bindable(), open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<SelectPrimitive.Root bind:value={value as never} bind:open {...rest} />

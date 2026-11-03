<!--
@component
**Combobox.Root** — Champ de saisie **avec suggestions filtrées** : longues listes, recherche. Le filtrage est à votre charge (dérivez la liste avec `$derived` à partir de la saisie).

**Anatomie** : `Combobox.Root` › `Combobox.Input` · `Combobox.Trigger` ; `Combobox.Portal` › `Combobox.Content` › `Combobox.Item` (prop `label`).

- `type` (**obligatoire**) : `"single"` ou `"multiple"`. `bind:value`, `bind:open`.

**Accessibilité** : rôle `combobox`, flèches pour parcourir, Entrée pour choisir, Échap pour fermer.

```svelte
<Combobox.Root type="single" bind:value onOpenChange={(o) => !o && (search = '')}>
	<div class="flex">
		<Combobox.Input oninput={(e) => (search = e.currentTarget.value)} placeholder="Pays" />
		<Combobox.Trigger />
	</div>
	<Combobox.Portal>
		<Combobox.Content>
			{#each filtered as c (c.value)}<Combobox.Item value={c.value} label={c.label} />{/each}
		</Combobox.Content>
	</Combobox.Portal>
</Combobox.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/combobox)
-->
<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';

	type Props = ComboboxPrimitive.RootProps;

	let { value = $bindable(), open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value / bind:open fonctionnent) — §7 -->
<ComboboxPrimitive.Root bind:value={value as never} bind:open {...rest} />

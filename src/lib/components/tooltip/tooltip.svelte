<!--
@component
**Tooltip.Root** — Courte **aide textuelle** au survol ou au focus d'un élément (nom d'un bouton icône, raccourci). Jamais d'information indispensable ni de contenu interactif : utilisez `Popover`.

**Anatomie** : `Tooltip.Provider` (une fois, à la racine de l'app) › `Tooltip.Root` › `Tooltip.Trigger` · `Tooltip.Content` (+ `Tooltip.Arrow`). Utilisable avec `bind:open`.

**Accessibilité** : s'ouvre aussi au focus clavier, se ferme avec Échap. Un bouton icône a quand même besoin de son `aria-label`.

```svelte
<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}<Button size="icon" aria-label="Copier" {...props}><Icons.Copy /></Button>{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content>Copier le lien</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
```

[API Bits UI](https://bits-ui.com/docs/components/tooltip)
-->
<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	type Props = TooltipPrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<TooltipPrimitive.Root bind:open {...rest} />

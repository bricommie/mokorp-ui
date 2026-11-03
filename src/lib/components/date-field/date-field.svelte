<!--
@component
**DateField.Root** — Saisie d'une date **au clavier**, segment par segment (jour / mois / année), sans calendrier. Idéal pour une date connue (date de naissance).

**Anatomie** : `DateField.Root` › `DateField.Label` · `DateField.Input` (snippet `children` avec `segments`) › `DateField.Segment`. Utilisable avec `bind:value` (`DateValue`).

```svelte
<DateField.Root bind:value locale="fr-FR">
	<DateField.Label>Date de naissance</DateField.Label>
	<DateField.Input>
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}<DateField.Segment {part}>{value}</DateField.Segment>{/each}
		{/snippet}
	</DateField.Input>
</DateField.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/date-field)
-->
<script lang="ts">
	import { DateField as DateFieldPrimitive } from 'bits-ui';

	type Props = DateFieldPrimitive.RootProps;

	let { value = $bindable(), placeholder = $bindable(), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<DateFieldPrimitive.Root
	bind:value={value as never}
	bind:placeholder={placeholder as never}
	{...rest}
/>

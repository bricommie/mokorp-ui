<!--
@component
**TimeField.Root** — Saisie d'une **heure** au clavier, segment par segment.

**Anatomie** : `TimeField.Root` › `TimeField.Label` · `TimeField.Input` › `TimeField.Segment`. Les valeurs sont des `Time` de `@internationalized/date` (`bind:value`).

```svelte
<TimeField.Root bind:value locale="fr-FR">
	<TimeField.Label>Heure du rendez-vous</TimeField.Label>
	<TimeField.Input>
		{#snippet children({ segments })}
			{#each segments as { part, value }, i (i)}<TimeField.Segment {part}>{value}</TimeField.Segment>{/each}
		{/snippet}
	</TimeField.Input>
</TimeField.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/time-field)
-->
<script lang="ts">
	import { TimeField as TimeFieldPrimitive } from 'bits-ui';

	type Props = TimeFieldPrimitive.RootProps;

	let { value = $bindable(), placeholder = $bindable(), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<TimeFieldPrimitive.Root
	bind:value={value as never}
	bind:placeholder={placeholder as never}
	{...rest}
/>

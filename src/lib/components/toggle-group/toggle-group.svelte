<!--
@component
**ToggleGroup.Root** — Groupe de bascules liées : **une seule** active (`type="single"`, comme un choix d'alignement) ou **plusieurs** (`type="multiple"`, comme gras / italique / souligné).

**Anatomie** : `ToggleGroup.Root` › `ToggleGroup.Item` (un par option). Utilisable avec `bind:value`.

**Accessibilité** : *roving focus* (Tab entre dans le groupe, flèches entre les items). `aria-label` sur le Root et sur chaque item icône.

```svelte
<ToggleGroup.Root type="single" bind:value aria-label="Alignement">
	<ToggleGroup.Item value="left" aria-label="Aligner à gauche">…</ToggleGroup.Item>
	<ToggleGroup.Item value="center" aria-label="Centrer">…</ToggleGroup.Item>
</ToggleGroup.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/toggle-group)
-->
<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ToggleGroupPrimitive.RootProps;

	let { class: className, value = $bindable(), ...rest }: Props = $props();
</script>

<!-- Conteneur structurel — §5 -->
<ToggleGroupPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn('inline-flex items-center', className)}
/>

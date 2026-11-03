<!--
@component
**Composant.Root** — ‹résumé en une phrase›.

‹Quand l'utiliser›. Pour ‹autre cas›, préférez `Autre`.

**Anatomie** : `Composant.Root` › `Composant.Trigger` + `Composant.Content`.

- `bind:value` : ‹ce que contient la valeur›.

**Accessibilité** : ‹clavier, nom accessible attendu›.

```svelte
<Composant.Root bind:value>
	<Composant.Trigger>…</Composant.Trigger>
	<Composant.Content>…</Composant.Content>
</Composant.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/SLUG)
-->
<script lang="ts">
	import { Xxx as XxxPrimitive } from 'bits-ui';

	type Props = XxxPrimitive.RootProps;

	// Prop bindable : MÊME défaut que Bits UI (lire
	// node_modules/bits-ui/dist/bits/composant/components/composant.svelte),
	// sinon « Cannot do `bind:value={undefined}` when `value` has a fallback value ».
	let { value = $bindable(''), ...rest }: Props = $props();
</script>

<XxxPrimitive.Root bind:value={value as never} {...rest} />

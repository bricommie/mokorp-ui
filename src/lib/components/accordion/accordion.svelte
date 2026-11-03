<!--
@component
**Accordion.Root** — Sections **repliables** empilées : FAQ, réglages avancés. Ne cachez pas dans un accordéon une information que tout le monde doit lire.

**Anatomie** : `Accordion.Root` › `Accordion.Item` › `Accordion.Header` › `Accordion.Trigger` (chevron intégré) ; `Accordion.Content`.

- `type` (**obligatoire**) : `"single"` (une section à la fois) ou `"multiple"`.
- `bind:value` : section(s) ouverte(s).

**Accessibilité** : le déclencheur est un bouton avec `aria-expanded`, dans un titre (`Header`).

```svelte
<Accordion.Root type="single">
	<Accordion.Item value="livraison">
		<Accordion.Header><Accordion.Trigger>Livraison</Accordion.Trigger></Accordion.Header>
		<Accordion.Content>Expédition sous 48 h.</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/accordion)
-->
<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	type Props = AccordionPrimitive.RootProps;

	let { value = $bindable(), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<AccordionPrimitive.Root bind:value={value as never} {...rest} />

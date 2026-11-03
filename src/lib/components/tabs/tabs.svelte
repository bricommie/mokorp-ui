<!--
@component
**Tabs.Root** — Onglets : basculer entre des **vues sœurs** d'un même contenu sans changer de page. Pour naviguer entre pages, utilisez des liens.

**Anatomie** : `Tabs.Root` › `Tabs.List` › `Tabs.Trigger` (un par onglet) ; `Tabs.Content` (un par panneau, même `value`). Utilisable avec `bind:value`.

**Accessibilité** : rôles `tablist` / `tab` / `tabpanel`, flèches entre les onglets.

```svelte
<Tabs.Root value="compte">
	<Tabs.List>
		<Tabs.Trigger value="compte">Compte</Tabs.Trigger>
		<Tabs.Trigger value="securite">Sécurité</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="compte">…</Tabs.Content>
	<Tabs.Content value="securite">…</Tabs.Content>
</Tabs.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/tabs)
-->
<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';

	type Props = TabsPrimitive.RootProps;

	let { value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<TabsPrimitive.Root bind:value={value as never} {...rest} />

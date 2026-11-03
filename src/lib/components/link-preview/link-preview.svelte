<!--
@component
**LinkPreview.Root** — Aperçu du contenu d'un **lien** au survol (profil, article). Purement complémentaire : le lien doit suffire seul, l'aperçu n'est pas accessible au tactile.

**Anatomie** : `LinkPreview.Root` › `Trigger` (le lien) ; `Portal` › `Content` (+ `Arrow`). Utilisable avec `bind:open`.

```svelte
<LinkPreview.Root>
	<LinkPreview.Trigger href="/u/brice">@brice</LinkPreview.Trigger>
	<LinkPreview.Portal>
		<LinkPreview.Content>Designer · Paris</LinkPreview.Content>
	</LinkPreview.Portal>
</LinkPreview.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/link-preview)
-->
<script lang="ts">
	import { LinkPreview as LinkPreviewPrimitive } from 'bits-ui';

	type Props = LinkPreviewPrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<LinkPreviewPrimitive.Root bind:open {...rest} />

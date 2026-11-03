<!--
@component
**Toolbar.Root** — Barre d'outils regroupant des boutons, liens et groupes de bascules liés à un même contenu (éditeur, tableau).

**Anatomie** : `Toolbar.Root` › `Toolbar.Button` · `Toolbar.Link` · `Toolbar.Group` › `Toolbar.GroupItem`.

**Accessibilité** : un seul arrêt de tabulation pour toute la barre, flèches pour se déplacer. `aria-label` sur le Root.

```svelte
<Toolbar.Root aria-label="Mise en forme">
	<Toolbar.Group type="multiple" bind:value={styles}>
		<Toolbar.GroupItem value="bold" aria-label="Gras">B</Toolbar.GroupItem>
	</Toolbar.Group>
	<Toolbar.Button onclick={undo}>Annuler</Toolbar.Button>
</Toolbar.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/toolbar)
-->
<script lang="ts">
	import { Toolbar as ToolbarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ToolbarPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Conteneur structurel — §5 -->
<ToolbarPrimitive.Root {...rest} class={cn('inline-flex items-center gap-1', className)} />

<!--
@component
**ScrollArea.Root** — Zone défilante avec des barres de défilement **stylées** et cohérentes entre navigateurs.

**Anatomie** : `ScrollArea.Root` › `ScrollArea.Viewport` (le contenu) · `ScrollArea.Scrollbar` › `ScrollArea.Thumb` · `ScrollArea.Corner`.

**Accessibilité** : rendez le viewport focusable (`tabindex="0"`) s'il contient du texte.

```svelte
<ScrollArea.Root class="h-64">
	<ScrollArea.Viewport tabindex={0}>…</ScrollArea.Viewport>
	<ScrollArea.Scrollbar orientation="vertical"><ScrollArea.Thumb /></ScrollArea.Scrollbar>
</ScrollArea.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/scroll-area)
-->
<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ScrollAreaPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Racine structurelle — §5 -->
<ScrollAreaPrimitive.Root {...rest} class={cn('relative overflow-hidden', className)} />

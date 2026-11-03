<!--
@component
**Menubar.Root** — Barre de menus horizontale façon application de bureau (Fichier, Édition, Affichage).

**Anatomie** : `Menubar.Root` › `Menubar.Menu` › `Trigger` ; `Portal` › `Content` › mêmes parties que `DropdownMenu`.

**Accessibilité** : ← / → passent d'un menu à l'autre, ↓ ouvre.

```svelte
<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>Fichier</Menubar.Trigger>
		<Menubar.Portal>
			<Menubar.Content>
				<Menubar.Item>Nouveau <Menubar.Shortcut>⌘N</Menubar.Shortcut></Menubar.Item>
			</Menubar.Content>
		</Menubar.Portal>
	</Menubar.Menu>
</Menubar.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.RootProps;

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Barre de menus — §4 -->
<MenubarPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn(
		'flex items-center gap-1 rounded-field border-(length:--border-width) border-border bg-background p-1 font-body',
		className
	)}
/>

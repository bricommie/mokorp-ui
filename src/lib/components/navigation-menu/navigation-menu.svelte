<!--
@component
**NavigationMenu.Root** — Menu de navigation de site avec **panneaux déroulants** (méga-menu). Pour une simple liste de liens, préférez `Navbar`.

**Anatomie** : `NavigationMenu.Root` › `List` › `Item` › `Trigger` + `Content` (ou `Link`) ; `Indicator` · `Viewport`.

**Accessibilité** : landmark `<nav>`, flèches entre les entrées, Échap ferme le panneau.

```svelte
<NavigationMenu.Root>
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Produits</NavigationMenu.Trigger>
			<NavigationMenu.Content>…</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item><NavigationMenu.Link href="/tarifs">Tarifs</NavigationMenu.Link></NavigationMenu.Item>
	</NavigationMenu.List>
	<NavigationMenu.Viewport />
</NavigationMenu.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/navigation-menu)
-->
<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.RootProps;

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Racine du menu de navigation — §4 -->
<NavigationMenuPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn('relative z-10 flex max-w-max flex-1 items-center justify-center font-body', className)}
/>

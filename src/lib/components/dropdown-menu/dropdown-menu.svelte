<!--
@component
**DropdownMenu.Root** — Menu d'**actions** ouvert depuis un bouton (« … », menu de compte). Pour choisir une **valeur** de formulaire, utilisez `Select`.

**Anatomie** : `DropdownMenu.Root` › `Trigger` ; `Portal` › `Content` › `Item` · `Group` › `GroupHeading` · `Separator` · `CheckboxItem` · `RadioGroup` › `RadioItem` · `Sub` › `SubTrigger` + `SubContent` · `Shortcut`. Utilisable avec `bind:open`.

**Accessibilité** : flèches, Entrée, Échap, → / ← pour les sous-menus, saisie d'une lettre pour sauter.

```svelte
<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}<Button variant="outline" {...props}>Compte</Button>{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content>
			<DropdownMenu.Item onSelect={openProfile}>Profil</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item onSelect={logout}>Se déconnecter</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/dropdown-menu)
-->
<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<DropdownMenuPrimitive.Root bind:open {...rest} />

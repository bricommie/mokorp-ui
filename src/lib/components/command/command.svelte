<!--
@component
**Command.Root** — Palette de **commandes** avec recherche intégrée (⌘K) : naviguer, lancer une action. Le filtrage est fait par le composant.

**Anatomie** : `Command.Root` › `Command.Input` · `Command.List` › `Command.Empty` · `Command.Group` › `GroupHeading` + `GroupItems` › `Command.Item` · `Command.Separator`.

Pour l'afficher en modale, placez-la dans un `Dialog.Content`.

```svelte
<Command.Root>
	<Command.Input placeholder="Rechercher…" />
	<Command.List>
		<Command.Empty>Aucun résultat.</Command.Empty>
		<Command.Group>
			<Command.GroupHeading>Pages</Command.GroupHeading>
			<Command.GroupItems>
				<Command.Item onSelect={() => goto('/reglages')}>Réglages</Command.Item>
			</Command.GroupItems>
		</Command.Group>
	</Command.List>
</Command.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/command)
-->
<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.RootProps;

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Racine de la palette de commandes : surface flottante — §3 -->
<CommandPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn(
		'rounded-surface flex h-full w-full flex-col overflow-hidden border-(length:--border-width) border-border-subtle bg-popover text-popover-foreground shadow-lg',
		className
	)}
/>

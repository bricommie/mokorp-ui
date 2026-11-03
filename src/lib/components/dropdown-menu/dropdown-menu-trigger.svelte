<!--
@component
**DropdownMenu.Trigger** — Déclencheur du menu, **sans style**. Pour un vrai bouton, utilisez le snippet `child` :

```svelte
<DropdownMenu.Trigger>
	{#snippet child({ props })}<Button variant="ghost" size="icon" aria-label="Actions" {...props}>…</Button>{/snippet}
</DropdownMenu.Trigger>
```

[API Bits UI](https://bits-ui.com/docs/components/dropdown-menu)
-->
<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Déclencheur du menu : pas de style (passthrough) — §7 -->
<DropdownMenuPrimitive.Trigger {...rest} />

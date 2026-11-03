<!--
@component
**ContextMenu.RadioGroup** — Groupe d'éléments radio (choix exclusif). Utilisable avec `bind:value`.

[API Bits UI](https://bits-ui.com/docs/components/context-menu)
-->
<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.RadioGroupProps;

	let { value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<ContextMenuPrimitive.RadioGroup bind:value={value as never} {...rest} />

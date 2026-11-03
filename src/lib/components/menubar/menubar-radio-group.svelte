<!--
@component
**Menubar.RadioGroup** — Groupe d'éléments radio (choix exclusif). Utilisable avec `bind:value`.

[API Bits UI](https://bits-ui.com/docs/components/menubar)
-->
<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';

	type Props = MenubarPrimitive.RadioGroupProps;

	let { value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<MenubarPrimitive.RadioGroup bind:value={value as never} {...rest} />

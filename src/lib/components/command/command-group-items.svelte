<!--
@component
**Command.GroupItems** — Conteneur des items d'un groupe (sans style).

[API Bits UI](https://bits-ui.com/docs/components/command)
-->
<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';

	type Props = CommandPrimitive.GroupItemsProps;

	let { ...rest }: Props = $props();
</script>

<!-- Éléments d'un groupe : pas de style (passthrough) — §7 -->
<CommandPrimitive.GroupItems {...rest} />

<!--
@component
**Command.Viewport** — Viewport de la liste (sans style), utile pour mesurer / animer sa hauteur.

[API Bits UI](https://bits-ui.com/docs/components/command)
-->
<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';

	type Props = CommandPrimitive.ViewportProps;

	let { ...rest }: Props = $props();
</script>

<!-- Viewport de la commande : pas de style (passthrough) — §7 -->
<CommandPrimitive.Viewport {...rest} />

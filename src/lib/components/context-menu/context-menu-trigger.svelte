<!--
@component
**ContextMenu.Trigger** — Zone qui ouvre le menu au **clic droit** (ou appui long). Sans style : c'est la zone elle-même que vous stylez.

[API Bits UI](https://bits-ui.com/docs/components/context-menu)
-->
<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Zone de déclenchement (clic droit) : pas de style (passthrough) — §7 -->
<ContextMenuPrimitive.Trigger {...rest} />

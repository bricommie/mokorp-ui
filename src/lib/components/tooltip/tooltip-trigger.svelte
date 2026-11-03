<!--
@component
**Tooltip.Trigger** — Élément qui déclenche l'aide (sans style). Pour un `Button`, utilisez le snippet `child`.

[API Bits UI](https://bits-ui.com/docs/components/tooltip)
-->
<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	type Props = TooltipPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Déclencheur : pas de style (passthrough) — §7 -->
<TooltipPrimitive.Trigger {...rest} />

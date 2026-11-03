<!--
@component
**Tooltip.Provider** — Fournisseur de contexte des tooltips (délais partagés). À placer **une fois**, à la racine de l'app.

[API Bits UI](https://bits-ui.com/docs/components/tooltip)
-->
<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	type Props = TooltipPrimitive.ProviderProps;

	let { ...rest }: Props = $props();
</script>

<!-- Fournisseur de contexte : pas de style (passthrough) — §7 -->
<TooltipPrimitive.Provider {...rest} />

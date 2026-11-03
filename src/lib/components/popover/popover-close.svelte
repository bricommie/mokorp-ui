<!--
@component
**Popover.Close** — Bouton qui ferme le popover (sans style).

[API Bits UI](https://bits-ui.com/docs/components/popover)
-->
<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';

	type Props = PopoverPrimitive.CloseProps;

	let { ...rest }: Props = $props();
</script>

<!-- Bouton de fermeture : pas de style (passthrough) — §7 -->
<PopoverPrimitive.Close {...rest} />

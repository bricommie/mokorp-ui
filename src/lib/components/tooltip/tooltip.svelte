<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	type Props = TooltipPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<TooltipPrimitive.Root {...rest} />

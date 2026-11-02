<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	type Props = TooltipPrimitive.ProviderProps;

	let { ...rest }: Props = $props();
</script>

<!-- Fournisseur de contexte : pas de style (passthrough) — §7 -->
<TooltipPrimitive.Provider {...rest} />

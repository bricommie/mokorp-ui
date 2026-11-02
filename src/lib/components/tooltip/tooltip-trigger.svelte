<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	type Props = TooltipPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Déclencheur : pas de style (passthrough) — §7 -->
<TooltipPrimitive.Trigger {...rest} />

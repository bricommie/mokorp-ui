<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Zone de déclenchement (clic droit) : pas de style (passthrough) — §7 -->
<ContextMenuPrimitive.Trigger {...rest} />

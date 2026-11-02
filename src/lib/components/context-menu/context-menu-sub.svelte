<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.SubProps;

	let { ...rest }: Props = $props();
</script>

<!-- Sous-menu : pas de style (passthrough) — §7 -->
<ContextMenuPrimitive.Sub {...rest} />
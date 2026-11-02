<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.SubProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<ContextMenuPrimitive.Sub bind:open {...rest} />

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<ContextMenuPrimitive.Root {...rest} />
<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.CheckboxGroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe de cases à cocher : pas de style (passthrough) — §7 -->
<ContextMenuPrimitive.CheckboxGroup {...rest} />
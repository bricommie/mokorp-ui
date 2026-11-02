<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.RadioGroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe radio : pas de style (passthrough) — §7 -->
<ContextMenuPrimitive.RadioGroup {...rest} />
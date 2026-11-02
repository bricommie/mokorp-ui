<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.SubProps;

	let { ...rest }: Props = $props();
</script>

<!-- Sous-menu : pas de style (passthrough) — §7 -->
<DropdownMenuPrimitive.Sub {...rest} />
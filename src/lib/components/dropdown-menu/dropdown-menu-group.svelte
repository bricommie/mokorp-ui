<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.GroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe d'éléments : pas de style (passthrough) — §7 -->
<DropdownMenuPrimitive.Group {...rest} />
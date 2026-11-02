<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.CheckboxGroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe de cases à cocher : pas de style (passthrough) — §7 -->
<DropdownMenuPrimitive.CheckboxGroup {...rest} />
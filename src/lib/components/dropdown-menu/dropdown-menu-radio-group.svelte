<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.RadioGroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe radio : pas de style (passthrough) — §7 -->
<DropdownMenuPrimitive.RadioGroup {...rest} />
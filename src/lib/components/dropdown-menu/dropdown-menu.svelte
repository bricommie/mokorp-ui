<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<DropdownMenuPrimitive.Root bind:open {...rest} />

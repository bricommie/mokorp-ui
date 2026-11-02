<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';

	type Props = PopoverPrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<PopoverPrimitive.Root bind:open {...rest} />

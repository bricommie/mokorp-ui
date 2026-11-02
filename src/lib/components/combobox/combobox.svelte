<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';

	type Props = ComboboxPrimitive.RootProps;

	let { value = $bindable(), open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value / bind:open fonctionnent) — §7 -->
<ComboboxPrimitive.Root bind:value={value as never} bind:open {...rest} />

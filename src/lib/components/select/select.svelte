<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	type Props = SelectPrimitive.RootProps;

	let { value = $bindable(), open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<SelectPrimitive.Root bind:value={value as never} bind:open {...rest} />

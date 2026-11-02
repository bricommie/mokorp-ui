<script lang="ts">
	import { TimeRangeField as TimeRangeFieldPrimitive } from 'bits-ui';

	type Props = TimeRangeFieldPrimitive.RootProps;

	let { value = $bindable(), placeholder = $bindable(), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<TimeRangeFieldPrimitive.Root
	bind:value={value as never}
	bind:placeholder={placeholder as never}
	{...rest}
/>

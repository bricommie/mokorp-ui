<script lang="ts">
	import { DateRangePicker as DateRangePickerPrimitive } from 'bits-ui';

	type Props = DateRangePickerPrimitive.RootProps;

	let {
		value = $bindable(),
		open = $bindable(false),
		placeholder = $bindable(),
		...rest
	}: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<DateRangePickerPrimitive.Root
	bind:value={value as never}
	bind:open
	bind:placeholder={placeholder as never}
	{...rest}
/>

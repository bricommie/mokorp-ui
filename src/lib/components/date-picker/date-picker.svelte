<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';

	type Props = DatePickerPrimitive.RootProps;

	let {
		value = $bindable(),
		open = $bindable(false),
		placeholder = $bindable(),
		...rest
	}: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<DatePickerPrimitive.Root
	bind:value={value as never}
	bind:open
	bind:placeholder={placeholder as never}
	{...rest}
/>

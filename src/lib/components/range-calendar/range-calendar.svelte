<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.RootProps;

	let { value = $bindable(), placeholder = $bindable(), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<RangeCalendarPrimitive.Root
	bind:value={value as never}
	bind:placeholder={placeholder as never}
	{...rest}
/>

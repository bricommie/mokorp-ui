<script lang="ts">
	import { DateRangePicker as DateRangePickerPrimitive } from 'bits-ui';

	type Props = DateRangePickerPrimitive.CalendarProps;

	let { ...rest }: Props = $props();
</script>

<!-- Calendrier de plage embarqué : pas de style (passthrough) — la surface est portée par Content -->
<DateRangePickerPrimitive.Calendar {...rest} />

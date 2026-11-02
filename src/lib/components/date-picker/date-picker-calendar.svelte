<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';

	type Props = DatePickerPrimitive.CalendarProps;

	let { ...rest }: Props = $props();
</script>

<!-- Calendrier embarqué : pas de style (passthrough) — la surface est portée par Content -->
<DatePickerPrimitive.Calendar {...rest} />

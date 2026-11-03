<!--
@component
**DatePicker.Calendar** — Calendrier embarqué dans le popover (sans style : la surface est portée par `Content`). Même anatomie que `Calendar.Root`.

[API Bits UI](https://bits-ui.com/docs/components/date-picker)
-->
<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';

	type Props = DatePickerPrimitive.CalendarProps;

	let { ...rest }: Props = $props();
</script>

<!-- Calendrier embarqué : pas de style (passthrough) — la surface est portée par Content -->
<DatePickerPrimitive.Calendar {...rest} />

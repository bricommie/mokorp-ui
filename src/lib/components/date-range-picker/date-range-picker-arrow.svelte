<!--
@component
**DateRangePicker.Arrow** — Flèche optionnelle du popover (sans style).

[API Bits UI](https://bits-ui.com/docs/components/date-range-picker)
-->
<script lang="ts">
	import { DateRangePicker as DateRangePickerPrimitive } from 'bits-ui';

	type Props = DateRangePickerPrimitive.ArrowProps;

	let { ...rest }: Props = $props();
</script>

<!-- Flèche du popover : pas de style (passthrough) -->
<DateRangePickerPrimitive.Arrow {...rest} />

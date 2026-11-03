<!--
@component
**DatePicker.Arrow** — Flèche optionnelle du popover (sans style).

[API Bits UI](https://bits-ui.com/docs/components/date-picker)
-->
<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';

	type Props = DatePickerPrimitive.ArrowProps;

	let { ...rest }: Props = $props();
</script>

<!-- Flèche du popover : pas de style (passthrough) -->
<DatePickerPrimitive.Arrow {...rest} />

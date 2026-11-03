<!--
@component
**DateRangePicker.Close** — Bouton de fermeture du popover (sans style).

[API Bits UI](https://bits-ui.com/docs/components/date-range-picker)
-->
<script lang="ts">
	import { DateRangePicker as DateRangePickerPrimitive } from 'bits-ui';

	type Props = DateRangePickerPrimitive.CloseProps;

	let { ...rest }: Props = $props();
</script>

<!-- Bouton de fermeture : pas de style (passthrough) -->
<DateRangePickerPrimitive.Close {...rest} />

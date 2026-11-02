<script lang="ts">
	import { DateRangePicker as DateRangePickerPrimitive } from 'bits-ui';

	type Props = DateRangePickerPrimitive.CloseProps;

	let { ...rest }: Props = $props();
</script>

<!-- Bouton de fermeture : pas de style (passthrough) -->
<DateRangePickerPrimitive.Close {...rest} />

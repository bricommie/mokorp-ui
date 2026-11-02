<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';

	type Props = DatePickerPrimitive.ArrowProps;

	let { ...rest }: Props = $props();
</script>

<!-- Flèche du popover : pas de style (passthrough) -->
<DatePickerPrimitive.Arrow {...rest} />

<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';

	type Props = DatePickerPrimitive.CloseProps;

	let { ...rest }: Props = $props();
</script>

<!-- Bouton de fermeture : pas de style (passthrough) -->
<DatePickerPrimitive.Close {...rest} />

<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';

	type Props = DatePickerPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — structurel -->
<DatePickerPrimitive.Root {...rest} />

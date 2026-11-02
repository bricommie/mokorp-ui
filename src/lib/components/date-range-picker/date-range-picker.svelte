<script lang="ts">
	import { DateRangePicker as DateRangePickerPrimitive } from 'bits-ui';

	type Props = DateRangePickerPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — structurel -->
<DateRangePickerPrimitive.Root {...rest} />

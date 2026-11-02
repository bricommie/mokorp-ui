<script lang="ts">
	import { DateRangeField as DateRangeFieldPrimitive } from 'bits-ui';

	type Props = DateRangeFieldPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — structurel -->
<DateRangeFieldPrimitive.Root {...rest} />

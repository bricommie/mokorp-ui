<script lang="ts">
	import { TimeRangeField as TimeRangeFieldPrimitive } from 'bits-ui';

	type Props = TimeRangeFieldPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — structurel -->
<TimeRangeFieldPrimitive.Root {...rest} />

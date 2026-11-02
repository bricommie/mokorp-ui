<script lang="ts">
	import { TimeField as TimeFieldPrimitive } from 'bits-ui';

	type Props = TimeFieldPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — structurel -->
<TimeFieldPrimitive.Root {...rest} />

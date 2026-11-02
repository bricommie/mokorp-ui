<script lang="ts">
	import { DateField as DateFieldPrimitive } from 'bits-ui';

	type Props = DateFieldPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — structurel -->
<DateFieldPrimitive.Root {...rest} />

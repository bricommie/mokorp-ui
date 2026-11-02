<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	type Props = SelectPrimitive.ValueProps;

	let { ...rest }: Props = $props();
</script>

<!-- Valeur sélectionnée : pas de style (passthrough) — §7 -->
<SelectPrimitive.Value {...rest} />
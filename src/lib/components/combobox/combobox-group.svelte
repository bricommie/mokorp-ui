<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';

	type Props = ComboboxPrimitive.GroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe d'options : pas de style (passthrough) — §7 -->
<ComboboxPrimitive.Group {...rest} />

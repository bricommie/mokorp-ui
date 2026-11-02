<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';

	type Props = ComboboxPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<ComboboxPrimitive.Root {...rest} />
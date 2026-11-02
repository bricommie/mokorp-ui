<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	type Props = SelectPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<SelectPrimitive.Root {...rest} />
<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';

	type Props = PopoverPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<PopoverPrimitive.Root {...rest} />
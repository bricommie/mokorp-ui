<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';

	type Props = PopoverPrimitive.CloseProps;

	let { ...rest }: Props = $props();
</script>

<!-- Bouton de fermeture : pas de style (passthrough) — §7 -->
<PopoverPrimitive.Close {...rest} />

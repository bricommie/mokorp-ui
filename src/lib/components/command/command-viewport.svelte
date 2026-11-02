<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';

	type Props = CommandPrimitive.ViewportProps;

	let { ...rest }: Props = $props();
</script>

<!-- Viewport de la commande : pas de style (passthrough) — §7 -->
<CommandPrimitive.Viewport {...rest} />

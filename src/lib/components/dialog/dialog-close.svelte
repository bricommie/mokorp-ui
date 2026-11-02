<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type Props = DialogPrimitive.CloseProps;

	let { ...rest }: Props = $props();
</script>

<!-- Bouton de fermeture : pas de style (passthrough) — §7 -->
<DialogPrimitive.Close {...rest} />
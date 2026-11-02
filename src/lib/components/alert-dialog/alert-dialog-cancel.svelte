<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	type Props = AlertDialogPrimitive.CancelProps;

	let { ...rest }: Props = $props();
</script>

<!-- Annulation : pas de style (passthrough) — §7 -->
<AlertDialogPrimitive.Cancel {...rest} />
<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	type Props = AlertDialogPrimitive.ActionProps;

	let { ...rest }: Props = $props();
</script>

<!-- Action de confirmation : pas de style (passthrough) — §7 -->
<AlertDialogPrimitive.Action {...rest} />
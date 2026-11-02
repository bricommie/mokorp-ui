<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	type Props = AlertDialogPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Déclencheur de l'alert-dialog : pas de style (passthrough) — §7 -->
<AlertDialogPrimitive.Trigger {...rest} />
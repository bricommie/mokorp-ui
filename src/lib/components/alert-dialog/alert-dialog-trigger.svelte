<!--
@component
**AlertDialog.Trigger** — Déclencheur, **sans style**. Pour un bouton, utilisez le snippet `child` avec `Button`.

[API Bits UI](https://bits-ui.com/docs/components/alert-dialog)
-->
<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	type Props = AlertDialogPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Déclencheur de l'alert-dialog : pas de style (passthrough) — §7 -->
<AlertDialogPrimitive.Trigger {...rest} />

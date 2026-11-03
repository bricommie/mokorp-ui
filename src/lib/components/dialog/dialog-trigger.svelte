<!--
@component
**Dialog.Trigger** — Déclencheur, **sans style**. Pour un bouton, utilisez le snippet `child` avec `Button`.

[API Bits UI](https://bits-ui.com/docs/components/dialog)
-->
<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type Props = DialogPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Déclencheur du dialog : pas de style (passthrough) — §7 -->
<DialogPrimitive.Trigger {...rest} />

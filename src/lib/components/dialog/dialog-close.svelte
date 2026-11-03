<!--
@component
**Dialog.Close** — Bouton qui ferme le dialogue (sans style : utilisez le snippet `child` avec `Button`).

[API Bits UI](https://bits-ui.com/docs/components/dialog)
-->
<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type Props = DialogPrimitive.CloseProps;

	let { ...rest }: Props = $props();
</script>

<!-- Bouton de fermeture : pas de style (passthrough) — §7 -->
<DialogPrimitive.Close {...rest} />

<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	type Props = AlertDialogPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<AlertDialogPrimitive.Root {...rest} />
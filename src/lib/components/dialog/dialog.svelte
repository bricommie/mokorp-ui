<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type Props = DialogPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<DialogPrimitive.Root {...rest} />
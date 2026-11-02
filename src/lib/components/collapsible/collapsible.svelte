<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';

	type Props = CollapsiblePrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<CollapsiblePrimitive.Root {...rest} />

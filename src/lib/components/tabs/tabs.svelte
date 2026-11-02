<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';

	type Props = TabsPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<TabsPrimitive.Root {...rest} />

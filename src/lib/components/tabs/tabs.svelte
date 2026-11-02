<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';

	type Props = TabsPrimitive.RootProps;

	let { value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<TabsPrimitive.Root bind:value={value as never} {...rest} />

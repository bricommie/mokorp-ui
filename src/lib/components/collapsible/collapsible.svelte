<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';

	type Props = CollapsiblePrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<CollapsiblePrimitive.Root bind:open {...rest} />

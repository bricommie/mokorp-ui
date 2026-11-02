<script lang="ts">
	import { LinkPreview as LinkPreviewPrimitive } from 'bits-ui';

	type Props = LinkPreviewPrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<LinkPreviewPrimitive.Root bind:open {...rest} />

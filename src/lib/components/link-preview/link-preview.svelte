<script lang="ts">
	import { LinkPreview as LinkPreviewPrimitive } from 'bits-ui';

	type Props = LinkPreviewPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — §7 -->
<LinkPreviewPrimitive.Root {...rest} />

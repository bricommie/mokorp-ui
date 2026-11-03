<!--
@component
**LinkPreview.Trigger** — Le lien qui déclenche l'aperçu (rendu en `<a>`, sans style).

[API Bits UI](https://bits-ui.com/docs/components/link-preview)
-->
<script lang="ts">
	import { LinkPreview as LinkPreviewPrimitive } from 'bits-ui';

	type Props = LinkPreviewPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Déclencheur : pas de style (passthrough) — §7 -->
<LinkPreviewPrimitive.Trigger {...rest} />

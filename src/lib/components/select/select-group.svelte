<!--
@component
**Select.Group** — Regroupe des options (sans style). Associez-lui un `Select.GroupHeading`.

[API Bits UI](https://bits-ui.com/docs/components/select)
-->
<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	type Props = SelectPrimitive.GroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe d'options : pas de style (passthrough) — §7 -->
<SelectPrimitive.Group {...rest} />

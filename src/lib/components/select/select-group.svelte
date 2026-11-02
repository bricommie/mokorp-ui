<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	type Props = SelectPrimitive.GroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe d'options : pas de style (passthrough) — §7 -->
<SelectPrimitive.Group {...rest} />
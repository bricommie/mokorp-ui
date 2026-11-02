<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';

	type Props = MenubarPrimitive.SubProps;

	let { ...rest }: Props = $props();
</script>

<!-- Sous-menu : pas de style (passthrough) — §7 -->
<MenubarPrimitive.Sub {...rest} />
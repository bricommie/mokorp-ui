<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';

	type Props = MenubarPrimitive.MenuProps;

	let { ...rest }: Props = $props();
</script>

<!-- Menu de la barre : pas de style (passthrough) — §7 -->
<MenubarPrimitive.Menu {...rest} />

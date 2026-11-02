<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';

	type Props = MenubarPrimitive.CheckboxGroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe de cases à cocher : pas de style (passthrough) — §7 -->
<MenubarPrimitive.CheckboxGroup {...rest} />
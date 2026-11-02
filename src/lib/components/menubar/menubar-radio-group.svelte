<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';

	type Props = MenubarPrimitive.RadioGroupProps;

	let { ...rest }: Props = $props();
</script>

<!-- Groupe radio : pas de style (passthrough) — §7 -->
<MenubarPrimitive.RadioGroup {...rest} />
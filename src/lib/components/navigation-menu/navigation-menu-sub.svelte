<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';

	type Props = NavigationMenuPrimitive.SubProps;

	let { ...rest }: Props = $props();
</script>

<!-- Sous-menu de navigation : pas de style (passthrough) — §7 -->
<NavigationMenuPrimitive.Sub {...rest} />
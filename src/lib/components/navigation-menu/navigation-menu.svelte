<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Racine du menu de navigation (coins nets) — §4 -->
<NavigationMenuPrimitive.Root
	{...rest}
	class={cn('relative z-10 flex max-w-max flex-1 items-center justify-center font-body', className)}
/>
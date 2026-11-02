<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.ViewportProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Calque absolu sous la liste : le panneau flotte au lieu de pousser le contenu — §3 -->
<div class="absolute left-0 top-full z-50 flex w-full justify-center">
	<NavigationMenuPrimitive.Viewport
		{...rest}
		class={cn(
			'rounded-surface relative mt-2 shrink-0 h-(--bits-navigation-menu-viewport-height) w-full overflow-hidden border-(length:--border-width) border-border-subtle bg-popover text-popover-foreground shadow-lg data-[state=closed]:hidden md:w-(--bits-navigation-menu-viewport-width)',
			className
		)}
	/>
</div>

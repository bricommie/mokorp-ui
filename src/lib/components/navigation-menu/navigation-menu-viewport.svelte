<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.ViewportProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Viewport : surface flottante (coins nets) — §3 -->
<NavigationMenuPrimitive.Viewport
	{...rest}
	class={cn(
		'relative mt-1.5 h-[var(--bits-navigation-menu-viewport-height)] w-full overflow-hidden border-2 border-border bg-popover text-popover-foreground shadow-lg',
		className
	)}
/>
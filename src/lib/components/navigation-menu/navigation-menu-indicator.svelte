<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.IndicatorProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Indicateur (flèche) du menu de navigation — §3 -->
<NavigationMenuPrimitive.Indicator
	{...rest}
	class={cn('top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden', className)}
/>
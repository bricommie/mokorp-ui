<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Panneau de contenu (positionné dans le viewport) — §3 -->
<NavigationMenuPrimitive.Content
	{...rest}
	class={cn('w-full p-4 font-body text-sm md:absolute md:w-auto', className)}
/>
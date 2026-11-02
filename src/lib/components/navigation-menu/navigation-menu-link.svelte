<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.LinkProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Lien du menu de navigation — §3 -->
<NavigationMenuPrimitive.Link
	{...rest}
	class={cn(
		'font-body text-sm text-foreground outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[active]:bg-muted',
		className
	)}
/>
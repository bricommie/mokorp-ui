<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.LinkProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Lien : même gabarit que `Trigger` (hauteur, padding, hover) ; page courante = primary — §3 -->
<NavigationMenuPrimitive.Link
	{...rest}
	class={cn(
		'inline-flex h-10 w-max items-center justify-center gap-1.5 px-3 py-2 font-body text-sm font-semibold text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[active]:bg-primary data-[active]:text-primary-foreground',
		className
	)}
/>

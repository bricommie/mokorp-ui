<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronDown from '../icons/chevron-down.svelte';

	type Props = NavigationMenuPrimitive.TriggerProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Déclencheur : même gabarit que `Link`, chevron intégré — §3 -->
<NavigationMenuPrimitive.Trigger
	{...rest}
	class={cn(
		'group inline-flex h-10 w-max items-center justify-center gap-1.5 px-3 py-2 font-body text-sm font-semibold text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=open]:bg-primary data-[state=open]:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&[data-state=open]>svg]:rotate-180',
		className
	)}
>
	{@render children?.()}
	<ChevronDown class="size-3.5 transition-transform" />
</NavigationMenuPrimitive.Trigger>

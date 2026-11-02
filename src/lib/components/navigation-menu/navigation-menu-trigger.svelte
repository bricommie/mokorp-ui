<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.TriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Déclencheur du menu de navigation (coins nets) — §3 -->
<NavigationMenuPrimitive.Trigger
	{...rest}
	class={cn(
		'group inline-flex h-10 w-max items-center justify-center gap-1 px-3 py-2 font-body text-sm font-medium text-foreground outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=open]:bg-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&[data-state=open]>svg]:rotate-180',
		className
	)}
/>
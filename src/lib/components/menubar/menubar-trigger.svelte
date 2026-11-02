<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.TriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Déclencheur de menu de barre (coins nets) — §3 -->
<MenubarPrimitive.Trigger
	{...rest}
	class={cn(
		'flex cursor-default select-none items-center px-3 py-1.5 font-body text-sm font-medium text-foreground outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=open]:bg-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
/>
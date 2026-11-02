<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.RootProps;

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Barre de menus (coins nets) — §4 -->
<MenubarPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn(
		'flex items-center gap-1 border-2 border-border bg-background p-1 font-body',
		className
	)}
/>

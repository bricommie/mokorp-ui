<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.RootProps;

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Racine de la palette de commandes : surface flottante (coins nets) — §3 -->
<CommandPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn(
		'flex h-full w-full flex-col overflow-hidden border-2 border-border bg-popover text-popover-foreground shadow-lg',
		className
	)}
/>

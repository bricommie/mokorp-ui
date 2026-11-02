<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.RootProps;

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Racine de la palette de commandes : surface flottante — §3 -->
<CommandPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn(
		'rounded-surface flex h-full w-full flex-col overflow-hidden border-(length:--border-width) border-border-subtle bg-popover text-popover-foreground shadow-lg',
		className
	)}
/>

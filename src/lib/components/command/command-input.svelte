<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.InputProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Champ de saisie de la commande — §3 -->
<CommandPrimitive.Input
	{...rest}
	class={cn(
		'flex h-11 w-full border-b-2 border-border bg-transparent px-3 py-2 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
		className
	)}
/>

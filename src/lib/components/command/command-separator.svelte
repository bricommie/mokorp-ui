<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.SeparatorProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Séparateur de commande — §3 -->
<CommandPrimitive.Separator {...rest} class={cn('h-px bg-border my-1', className)} />
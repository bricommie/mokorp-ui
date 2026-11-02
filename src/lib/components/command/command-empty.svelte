<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.EmptyProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- État vide de la commande — §5 -->
<CommandPrimitive.Empty
	{...rest}
	class={cn('py-6 text-center font-body text-sm text-muted-foreground', className)}
/>

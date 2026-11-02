<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.GroupProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Groupe de commandes — §4 -->
<CommandPrimitive.Group {...rest} class={cn('overflow-hidden p-1 text-foreground', className)} />

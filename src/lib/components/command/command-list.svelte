<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.ListProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Liste des commandes — §4 -->
<CommandPrimitive.List
	{...rest}
	class={cn('max-h-full overflow-y-auto overflow-x-hidden', className)}
/>
<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.LinkItemProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Lien de commande — §3 -->
<CommandPrimitive.LinkItem
	{...rest}
	class={cn(
		'rounded-item relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
/>

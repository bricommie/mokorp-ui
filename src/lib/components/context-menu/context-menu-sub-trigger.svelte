<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronRight from '../icons/chevron-right.svelte';

	type Props = ContextMenuPrimitive.SubTriggerProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Déclencheur de sous-menu : chevron à droite — §3 -->
<ContextMenuPrimitive.SubTrigger
	{...rest}
	class={cn(
		'rounded-item relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground',
		className
	)}
>
	{@render children?.()}
	<ChevronRight class="ml-auto size-4" />
</ContextMenuPrimitive.SubTrigger>

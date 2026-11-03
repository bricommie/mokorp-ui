<!--
@component
**DropdownMenu.SubTrigger** — Élément qui ouvre un sous-menu (chevron intégré à droite, → au clavier).

[API Bits UI](https://bits-ui.com/docs/components/dropdown-menu)
-->
<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import ChevronRight from '../icons/chevron-right.svelte';

	type Props = DropdownMenuPrimitive.SubTriggerProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Déclencheur de sous-menu : chevron à droite — §3 -->
<DropdownMenuPrimitive.SubTrigger
	{...rest}
	class={cn(
		'rounded-item relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground',
		className
	)}
>
	{@render children?.()}
	<ChevronRight class="ml-auto size-4" />
</DropdownMenuPrimitive.SubTrigger>

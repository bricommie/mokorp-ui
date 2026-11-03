<!--
@component
**Command.Item** — Commande sélectionnable (clic, Entrée). `onSelect` déclenche l'action ; `keywords` élargit la recherche.

[API Bits UI](https://bits-ui.com/docs/components/command)
-->
<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.ItemProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Élément de commande — §3 -->
<CommandPrimitive.Item
	{...rest}
	class={cn(
		'rounded-item relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
/>

<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.InputProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Champ de saisie du combobox — §3 -->
<ComboboxPrimitive.Input
	{...rest}
	class={cn(
		'flex h-10 w-full bg-transparent px-3 py-2 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
		className
	)}
/>
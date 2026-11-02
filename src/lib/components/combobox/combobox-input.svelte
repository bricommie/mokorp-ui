<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.InputProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Champ de saisie structurel (coins nets) — à joindre au `Trigger` dans un `flex` — §3 / §5 -->
<ComboboxPrimitive.Input
	{...rest}
	class={cn(
		'flex h-10 w-full border-2 border-input bg-background px-3 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
		className
	)}
/>

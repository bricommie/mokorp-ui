<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.TriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Bouton structurel — §3 -->
<ComboboxPrimitive.Trigger
	{...rest}
	class={cn(
		'flex items-center justify-between gap-2 border-2 border-input bg-background px-3 py-2 font-body text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50',
		className
	)}
/>
<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PopoverPrimitive.TriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Bouton structurel — §3 -->
<PopoverPrimitive.Trigger
	{...rest}
	class={cn(
		'rounded-field flex items-center justify-between gap-2 border-(length:--border-width) border-input bg-background px-3 py-2 font-body text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50',
		className
	)}
/>

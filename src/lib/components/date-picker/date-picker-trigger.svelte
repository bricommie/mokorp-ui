<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DatePickerPrimitive.TriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Déclencheur (bouton) qui porte le champ — structurel + ring primary — §5 -->
<DatePickerPrimitive.Trigger
	{...rest}
	class={cn(
		'flex items-center gap-1 border-2 border-input bg-background px-3 py-2 font-body text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
		className
	)}
/>

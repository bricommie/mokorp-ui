<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DatePickerPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante du popover — §3 -->
<DatePickerPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'rounded-surface z-50 border-(length:--border-width) border-border-subtle bg-popover p-2 text-popover-foreground shadow-lg',
		className
	)}
/>

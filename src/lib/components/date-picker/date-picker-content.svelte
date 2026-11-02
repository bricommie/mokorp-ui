<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DatePickerPrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante du popover — §3 -->
<DatePickerPrimitive.Content
	{...rest}
	class={cn('border-2 border-border bg-popover p-2 text-popover-foreground shadow-lg', className)}
/>

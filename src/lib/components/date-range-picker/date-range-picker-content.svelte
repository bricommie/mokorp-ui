<script lang="ts">
	import { DateRangePicker as DateRangePickerPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateRangePickerPrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante du popover — §3 -->
<DateRangePickerPrimitive.Content
	{...rest}
	class={cn('border-2 border-border bg-popover p-2 text-popover-foreground shadow-lg', className)}
/>

<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DatePickerPrimitive.ContentStaticProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante statique du popover — §3 -->
<DatePickerPrimitive.ContentStatic
	{...rest}
	class={cn('border-2 border-border bg-popover p-2 text-popover-foreground shadow-lg', className)}
/>

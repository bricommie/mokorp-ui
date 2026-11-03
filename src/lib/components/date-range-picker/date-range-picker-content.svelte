<!--
@component
**DateRangePicker.Content** — Surface flottante du calendrier de plage. `sideOffset` = 8 par défaut.

[API Bits UI](https://bits-ui.com/docs/components/date-range-picker)
-->
<script lang="ts">
	import { DateRangePicker as DateRangePickerPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateRangePickerPrimitive.ContentProps;

	let { class: className, sideOffset = 8, ...rest }: Props = $props();
</script>

<!-- Surface flottante du popover — §3 -->
<DateRangePickerPrimitive.Content
	{...rest}
	{sideOffset}
	class={cn(
		'rounded-surface z-50 border-(length:--border-width) border-border-subtle bg-popover p-2 text-popover-foreground shadow-lg',
		className
	)}
/>

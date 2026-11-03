<!--
@component
**RangeCalendar.Header** — En-tête du calendrier : contient `PrevButton`, `Heading` et `NextButton`.

[API Bits UI](https://bits-ui.com/docs/components/range-calendar)
-->
<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RangeCalendarPrimitive.HeaderProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- En-tête du calendrier : navigation — structurel -->
<RangeCalendarPrimitive.Header
	{...rest}
	class={cn('flex w-full items-center justify-between gap-2', className)}
/>

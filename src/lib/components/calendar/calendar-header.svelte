<!--
@component
**Calendar.Header** — En-tête du calendrier : contient `PrevButton`, `Heading` et `NextButton`.

[API Bits UI](https://bits-ui.com/docs/components/calendar)
-->
<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.HeaderProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- En-tête du calendrier : navigation — structurel -->
<CalendarPrimitive.Header
	{...rest}
	class={cn('flex w-full items-center justify-between gap-2', className)}
/>

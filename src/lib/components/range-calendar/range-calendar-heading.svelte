<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RangeCalendarPrimitive.HeadingProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Titre mois/année : typo display — §6 -->
<RangeCalendarPrimitive.Heading
	{...rest}
	class={cn('font-display text-sm font-semibold capitalize', className)}
/>

<!--
@component
**RangeCalendar.Heading** — Titre mois / année du calendrier (typographie display), mis à jour à la navigation.

[API Bits UI](https://bits-ui.com/docs/components/range-calendar)
-->
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

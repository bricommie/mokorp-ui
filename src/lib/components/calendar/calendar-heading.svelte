<!--
@component
**Calendar.Heading** — Titre mois / année du calendrier (typographie display), mis à jour à la navigation.

[API Bits UI](https://bits-ui.com/docs/components/calendar)
-->
<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.HeadingProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Titre mois/année : typo display — §6 -->
<CalendarPrimitive.Heading
	{...rest}
	class={cn('font-display text-sm font-semibold capitalize', className)}
/>

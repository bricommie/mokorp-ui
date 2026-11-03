<!--
@component
**Calendar.Grid** — Grille d'un mois (`<table>`, rôle `grid`). Une par élément de `months`.

[API Bits UI](https://bits-ui.com/docs/components/calendar)
-->
<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.GridProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Grille (table) : pleine largeur, bordures fusionnées — structurel -->
<CalendarPrimitive.Grid {...rest} class={cn('w-full border-collapse', className)} />

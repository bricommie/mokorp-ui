<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RangeCalendarPrimitive.CellProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Cellule de grille : pas de padding, centre le jour — structurel -->
<RangeCalendarPrimitive.Cell {...rest} class={cn('p-0 text-center', className)} />

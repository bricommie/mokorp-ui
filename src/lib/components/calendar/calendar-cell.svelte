<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.CellProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Cellule de grille : pas de padding, centre le jour — structurel -->
<CalendarPrimitive.Cell {...rest} class={cn('p-0 text-center', className)} />

<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.HeadCellProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Étiquette de jour de semaine — structurel -->
<CalendarPrimitive.HeadCell
	{...rest}
	class={cn('p-0 text-center font-body text-xs font-semibold text-muted-foreground', className)}
/>

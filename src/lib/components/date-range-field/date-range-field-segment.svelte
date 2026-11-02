<script lang="ts">
	import { DateRangeField as DateRangeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateRangeFieldPrimitive.SegmentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Segment éditable : mise en avant au focus — structurel (coins nets) -->
<DateRangeFieldPrimitive.Segment
	{...rest}
	class={cn('rounded-none focus:bg-muted focus:text-foreground', className)}
/>

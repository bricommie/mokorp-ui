<script lang="ts">
	import { TimeRangeField as TimeRangeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TimeRangeFieldPrimitive.SegmentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Segment éditable : mise en avant au focus — structurel (coins nets) -->
<TimeRangeFieldPrimitive.Segment
	{...rest}
	class={cn('rounded-none focus:bg-muted focus:text-foreground', className)}
/>

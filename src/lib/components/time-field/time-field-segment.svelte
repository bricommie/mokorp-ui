<script lang="ts">
	import { TimeField as TimeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TimeFieldPrimitive.SegmentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Segment éditable : mise en avant au focus — structurel (coins nets) -->
<TimeFieldPrimitive.Segment
	{...rest}
	class={cn('rounded-none focus:bg-muted focus:text-foreground', className)}
/>

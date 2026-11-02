<script lang="ts">
	import { DateField as DateFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateFieldPrimitive.SegmentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Segment éditable : mise en avant au focus — structurel -->
<DateFieldPrimitive.Segment
	{...rest}
	class={cn('rounded-item focus:bg-muted focus:text-foreground', className)}
/>

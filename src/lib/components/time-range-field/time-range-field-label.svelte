<script lang="ts">
	import { TimeRangeField as TimeRangeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TimeRangeFieldPrimitive.LabelProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Motif signature « Label » — §6 -->
<TimeRangeFieldPrimitive.Label
	{...rest}
	class={cn('font-mono text-xs uppercase tracking-[0.08em]', className)}
/>

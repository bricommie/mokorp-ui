<script lang="ts">
	import { DateRangeField as DateRangeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateRangeFieldPrimitive.LabelProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Motif signature « Label » — §6 -->
<DateRangeFieldPrimitive.Label
	{...rest}
	class={cn('font-mono text-xs uppercase tracking-[0.08em]', className)}
/>

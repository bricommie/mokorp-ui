<script lang="ts">
	import { TimeField as TimeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TimeFieldPrimitive.LabelProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Motif signature « Label » — §6 -->
<TimeFieldPrimitive.Label
	{...rest}
	class={cn('font-mono text-xs uppercase tracking-[0.08em]', className)}
/>

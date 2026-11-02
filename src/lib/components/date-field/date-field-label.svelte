<script lang="ts">
	import { DateField as DateFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateFieldPrimitive.LabelProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Motif signature « Label » — §6 -->
<DateFieldPrimitive.Label {...rest} class={cn('font-body text-sm font-semibold', className)} />

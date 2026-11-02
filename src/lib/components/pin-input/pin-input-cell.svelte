<script lang="ts">
	import { PinInput as PinInputPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PinInputPrimitive.CellProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Cellule carrée (coins nets) + ring primary à l'état actif — §5 -->
<PinInputPrimitive.Cell
	{...rest}
	class={cn(
		'flex size-10 items-center justify-center border-2 border-input bg-background font-mono text-center text-sm text-foreground transition-colors data-[active]:ring-2 data-[active]:ring-ring data-[active]:ring-offset-2 data-[active]:ring-offset-background',
		className
	)}
/>

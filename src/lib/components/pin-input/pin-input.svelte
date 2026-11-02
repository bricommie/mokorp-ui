<script lang="ts">
	import { PinInput as PinInputPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PinInputPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Conteneur structurel (coins nets) — §5 -->
<PinInputPrimitive.Root
	{...rest}
	class={cn('inline-flex items-center gap-2', className)}
/>

<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ToggleGroupPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Conteneur structurel (coins nets) — §5 -->
<ToggleGroupPrimitive.Root
	{...rest}
	class={cn('inline-flex items-center gap-1', className)}
/>

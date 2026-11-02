<script lang="ts">
	import { Toolbar as ToolbarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ToolbarPrimitive.GroupProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Groupe structurel (coins nets) — §5 -->
<ToolbarPrimitive.Group
	{...rest}
	class={cn('inline-flex items-center gap-1', className)}
/>

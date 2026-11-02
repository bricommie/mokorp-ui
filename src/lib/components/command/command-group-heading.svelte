<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.GroupHeadingProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Étiquette de groupe — §5 -->
<CommandPrimitive.GroupHeading
	{...rest}
	class={cn(
		'px-2 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground',
		className
	)}
/>

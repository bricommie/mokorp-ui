<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.GroupHeadingProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Étiquette de groupe — §5 -->
<MenubarPrimitive.GroupHeading
	{...rest}
	class={cn(
		'px-2 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground',
		className
	)}
/>
<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AvatarPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Organique (rounded-full) + surface encre 2px — §4 / §5 -->
<AvatarPrimitive.Root
	{...rest}
	class={cn(
		'relative flex size-10 shrink-0 overflow-hidden rounded-full border-2 border-border',
		className
	)}
/>

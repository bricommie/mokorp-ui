<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AvatarPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Organique (rounded-pill) + surface bordure `--border-width` — §4 / §5 -->
<AvatarPrimitive.Root
	{...rest}
	class={cn(
		'relative flex size-10 shrink-0 overflow-hidden rounded-pill border-(length:--border-width) border-border',
		className
	)}
/>

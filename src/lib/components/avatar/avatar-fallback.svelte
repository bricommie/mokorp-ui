<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AvatarPrimitive.FallbackProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Fallback centré, police display — §6 -->
<AvatarPrimitive.Fallback
	{...rest}
	class={cn('flex h-full w-full items-center justify-center rounded-full bg-muted font-display', className)}
/>

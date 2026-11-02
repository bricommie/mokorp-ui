<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AvatarPrimitive.ImageProps;

	let { class: className, ...rest }: Props = $props();
</script>

<AvatarPrimitive.Image {...rest} class={cn('h-full w-full object-cover', className)} />

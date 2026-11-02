<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ScrollAreaPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Racine structurelle (coins nets) — §5 -->
<ScrollAreaPrimitive.Root {...rest} class={cn('relative overflow-hidden', className)} />

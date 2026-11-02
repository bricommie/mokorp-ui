<script lang="ts">
	import { AspectRatio as AspectRatioPrimitive } from 'bits-ui';
	import { cn } from '../cn.js';

	type Props = AspectRatioPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Structurel (coins nets) — conteneur à ratio, clippe le contenu — §4 -->
<AspectRatioPrimitive.Root {...rest} class={cn('overflow-hidden', className)} />

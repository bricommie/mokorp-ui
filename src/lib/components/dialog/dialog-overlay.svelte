<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DialogPrimitive.OverlayProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Overlay de dialog : fond translucide — §3 -->
<DialogPrimitive.Overlay {...rest} class={cn('fixed inset-0 z-50 bg-background/80', className)} />

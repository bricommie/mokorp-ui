<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AlertDialogPrimitive.OverlayProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Overlay de l'alert-dialog : fond translucide — §3 -->
<AlertDialogPrimitive.Overlay {...rest} class={cn('fixed inset-0 z-50 bg-background/80', className)} />
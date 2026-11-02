<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import { buttonVariants, type ButtonVariant } from '../button.js';

	type Props = AlertDialogPrimitive.CancelProps & { variant?: ButtonVariant };

	let { class: className, variant = 'outline', ...rest }: Props = $props();
</script>

<!-- Annulation : rendue comme un Button outline — §7 -->
<AlertDialogPrimitive.Cancel {...rest} class={cn(buttonVariants({ variant }), className)} />

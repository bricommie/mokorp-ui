<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import { buttonVariants, type ButtonVariant } from '../button.js';

	type Props = AlertDialogPrimitive.ActionProps & { variant?: ButtonVariant };

	let { class: className, variant = 'primary', ...rest }: Props = $props();
</script>

<!-- Action de confirmation : rendue comme un Button (`variant` configurable) — §7 -->
<AlertDialogPrimitive.Action {...rest} class={cn(buttonVariants({ variant }), className)} />

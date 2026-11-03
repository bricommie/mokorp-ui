<!--
@component
**AlertDialog.Action** — Bouton de confirmation, rendu comme un `Button` (`variant="primary"` par défaut, `"destructive"` pour une suppression).

[API Bits UI](https://bits-ui.com/docs/components/alert-dialog)
-->
<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import { buttonVariants, type ButtonVariant } from '../button.js';

	type Props = AlertDialogPrimitive.ActionProps & {
		/**
		 * Apparence du bouton (mêmes valeurs que `Button`). `destructive` pour une suppression.
		 * @default 'primary'
		 */
		variant?: ButtonVariant;
	};

	let { class: className, variant = 'primary', ...rest }: Props = $props();
</script>

<!-- Action de confirmation : rendue comme un Button (`variant` configurable) — §7 -->
<AlertDialogPrimitive.Action {...rest} class={cn(buttonVariants({ variant }), className)} />

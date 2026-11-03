<!--
@component
**AlertDialog.Cancel** — Bouton d'annulation, rendu comme un `Button` (`variant="outline"` par défaut). Reçoit le focus à l'ouverture.

[API Bits UI](https://bits-ui.com/docs/components/alert-dialog)
-->
<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import { buttonVariants, type ButtonVariant } from '../button.js';

	type Props = AlertDialogPrimitive.CancelProps & {
		/**
		 * Apparence du bouton (mêmes valeurs que `Button`).
		 * @default 'outline'
		 */
		variant?: ButtonVariant;
	};

	let { class: className, variant = 'outline', ...rest }: Props = $props();
</script>

<!-- Annulation : rendue comme un Button outline — §7 -->
<AlertDialogPrimitive.Cancel {...rest} class={cn(buttonVariants({ variant }), className)} />

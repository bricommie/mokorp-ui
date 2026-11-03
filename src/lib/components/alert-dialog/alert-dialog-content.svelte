<!--
@component
**AlertDialog.Content** — Surface centrée du dialogue, bornée à la fenêtre (défile si le contenu dépasse). Focus piégé à l'intérieur.

[API Bits UI](https://bits-ui.com/docs/components/alert-dialog)
-->
<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AlertDialogPrimitive.ContentProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Surface flottante centrée, bornée à la fenêtre — §3 -->
<AlertDialogPrimitive.Content
	{...rest}
	class={cn(
		'rounded-surface fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto border-(length:--border-width) border-border-subtle bg-popover p-6 font-body text-popover-foreground shadow-xl outline-none',
		className
	)}
>
	{@render children?.()}
</AlertDialogPrimitive.Content>

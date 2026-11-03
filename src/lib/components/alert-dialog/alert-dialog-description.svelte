<!--
@component
**AlertDialog.Description** — Explication des conséquences, reliée au dialogue par `aria-describedby`.

[API Bits UI](https://bits-ui.com/docs/components/alert-dialog)
-->
<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AlertDialogPrimitive.DescriptionProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Description de l'alert-dialog — §5 -->
<AlertDialogPrimitive.Description
	{...rest}
	class={cn('font-body text-sm text-muted-foreground', className)}
/>

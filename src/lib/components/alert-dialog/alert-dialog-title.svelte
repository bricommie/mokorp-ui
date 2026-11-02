<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AlertDialogPrimitive.TitleProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Titre de l'alert-dialog — §5 -->
<AlertDialogPrimitive.Title
	{...rest}
	class={cn('font-display text-lg font-semibold text-foreground', className)}
/>
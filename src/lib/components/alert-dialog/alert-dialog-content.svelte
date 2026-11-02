<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AlertDialogPrimitive.ContentProps;

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Surface flottante centrée (coins nets), bornée à la fenêtre — §3 -->
<AlertDialogPrimitive.Content
	{...rest}
	class={cn(
		'fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto border-2 border-border bg-popover p-6 font-body text-popover-foreground shadow-xl outline-none',
		className
	)}
>
	{@render children?.()}
</AlertDialogPrimitive.Content>

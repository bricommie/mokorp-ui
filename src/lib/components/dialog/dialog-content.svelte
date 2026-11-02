<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DialogPrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Surface flottante centrée (coins nets) — §3 -->
<DialogPrimitive.Content
	{...rest}
	class={cn(
		'fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 border-2 border-border bg-popover p-6 font-body text-popover-foreground shadow-lg outline-none',
		className
	)}
/>
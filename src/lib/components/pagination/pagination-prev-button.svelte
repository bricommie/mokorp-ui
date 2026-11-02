<script lang="ts">
	import { Pagination as PaginationPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PaginationPrimitive.PrevButtonProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Bouton « précédent » organique (pill) — §5 -->
<PaginationPrimitive.PrevButton
	{...rest}
	class={cn(
		'inline-flex size-9 items-center justify-center rounded-full border-2 border-border font-body text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
		className
	)}
/>

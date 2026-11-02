<script lang="ts">
	import { Pagination as PaginationPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PaginationPrimitive.PageProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Item organique (pill) + état sélectionné primary — §5 -->
<PaginationPrimitive.Page
	{...rest}
	class={cn(
		'inline-flex size-9 items-center justify-center rounded-full border-2 border-border font-body text-sm text-foreground transition-colors not-data-[selected]:hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[selected]:bg-primary data-[selected]:text-primary-foreground disabled:pointer-events-none disabled:opacity-50',
		className
	)}
/>

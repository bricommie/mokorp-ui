<script lang="ts">
	import { Pagination as PaginationPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PaginationPrimitive.RootProps;

	let { class: className, page = $bindable(1), ...rest }: Props = $props();
</script>

<!-- Conteneur organique (items pill) — §5 -->
<PaginationPrimitive.Root
	bind:page
	{...rest}
	class={cn('inline-flex flex-wrap items-center gap-1', className)}
/>

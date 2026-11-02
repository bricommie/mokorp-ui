<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DropdownMenuPrimitive.GroupHeadingProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Étiquette de groupe — §5 -->
<DropdownMenuPrimitive.GroupHeading
	{...rest}
	class={cn('px-2 py-1.5 font-body text-xs font-semibold text-muted-foreground', className)}
/>

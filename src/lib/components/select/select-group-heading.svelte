<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SelectPrimitive.GroupHeadingProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Étiquette de groupe — §5 -->
<SelectPrimitive.GroupHeading
	{...rest}
	class={cn('px-2 py-1.5 font-body text-xs font-semibold text-muted-foreground', className)}
/>

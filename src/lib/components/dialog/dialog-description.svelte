<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DialogPrimitive.DescriptionProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Description du dialog — §5 -->
<DialogPrimitive.Description
	{...rest}
	class={cn('font-body text-sm text-muted-foreground', className)}
/>
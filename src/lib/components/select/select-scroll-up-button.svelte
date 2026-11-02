<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SelectPrimitive.ScrollUpButtonProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Bouton de défilement vers le haut — §3 -->
<SelectPrimitive.ScrollUpButton
	{...rest}
	class={cn('flex items-center justify-center py-1', className)}
/>
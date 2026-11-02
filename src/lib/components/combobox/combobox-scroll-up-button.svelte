<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.ScrollUpButtonProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Bouton de défilement vers le haut — §3 -->
<ComboboxPrimitive.ScrollUpButton
	{...rest}
	class={cn('flex items-center justify-center py-1', className)}
/>
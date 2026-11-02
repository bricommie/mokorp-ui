<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.ScrollDownButtonProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Bouton de défilement vers le bas — §3 -->
<ComboboxPrimitive.ScrollDownButton
	{...rest}
	class={cn('flex items-center justify-center py-1', className)}
/>
<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RadioGroupPrimitive.RootProps;

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Groupe : disposition grille — §7 -->
<RadioGroupPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn('grid gap-2', className)}
/>

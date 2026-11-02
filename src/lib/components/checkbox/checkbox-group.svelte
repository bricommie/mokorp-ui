<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CheckboxPrimitive.GroupProps;

	let { class: className, value = $bindable([]), ...rest }: Props = $props();
</script>

<!-- Groupe : empilement vertical léger — §7 -->
<CheckboxPrimitive.Group
	bind:value={value as never}
	{...rest}
	class={cn('flex flex-col gap-2', className)}
/>

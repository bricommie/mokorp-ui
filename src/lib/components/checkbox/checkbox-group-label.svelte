<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CheckboxPrimitive.GroupLabelProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Motif Label — §6 -->
<CheckboxPrimitive.GroupLabel {...rest} class={cn('font-body text-sm font-semibold', className)} />

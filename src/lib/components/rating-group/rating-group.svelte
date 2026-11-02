<script lang="ts">
	import { RatingGroup as RatingGroupPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RatingGroupPrimitive.RootProps;

	let { class: className, value = $bindable(0), ...rest }: Props = $props();
</script>

<!-- Structurel — rangée d'étoiles — §4 -->
<RatingGroupPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn('inline-flex items-center gap-1', className)}
/>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SelectPrimitive.ViewportProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Viewport du select — §4 -->
<SelectPrimitive.Viewport {...rest} class={cn('p-1', className)} />

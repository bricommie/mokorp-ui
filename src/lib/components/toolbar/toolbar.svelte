<script lang="ts">
	import { Toolbar as ToolbarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ToolbarPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Conteneur structurel — §5 -->
<ToolbarPrimitive.Root {...rest} class={cn('inline-flex items-center gap-1', className)} />

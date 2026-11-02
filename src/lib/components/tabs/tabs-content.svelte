<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TabsPrimitive.ContentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<TabsPrimitive.Content {...rest} class={cn('py-2 font-body text-sm text-foreground', className)} />

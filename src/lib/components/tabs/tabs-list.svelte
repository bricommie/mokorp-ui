<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TabsPrimitive.ListProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Liste d'onglets : séparateur encre 2px — §5 -->
<TabsPrimitive.List
	{...rest}
	class={cn('inline-flex items-center border-b-2 border-border', className)}
/>

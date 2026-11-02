<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TabsPrimitive.ListProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Liste d'onglets : filet encre 2px (ombre interne, pour pouvoir défiler sans rogner le soulignement) — §5 -->
<TabsPrimitive.List
	{...rest}
	class={cn(
		'flex items-stretch overflow-x-auto overflow-y-hidden shadow-[inset_0_-2px_0_0_var(--border)]',
		className
	)}
/>

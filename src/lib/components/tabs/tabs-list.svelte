<!--
@component
**Tabs.List** — Rangée des onglets (rôle `tablist`), défilable si elle déborde.

[API Bits UI](https://bits-ui.com/docs/components/tabs)
-->
<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TabsPrimitive.ListProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Liste d'onglets : filet `--border-width` (ombre interne, pour pouvoir défiler sans rogner le soulignement) — §5 -->
<TabsPrimitive.List
	{...rest}
	class={cn(
		'flex items-stretch overflow-x-auto overflow-y-hidden shadow-[inset_0_calc(-1*var(--border-width))_0_0_var(--border-subtle)]',
		className
	)}
/>

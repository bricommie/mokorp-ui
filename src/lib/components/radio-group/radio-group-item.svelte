<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '../../cn.js';

	type Props = Omit<RadioGroupPrimitive.ItemProps, 'children'> & {
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Indicateur organique (rond) + point interne piloté par data-state — §3 / §4 -->
<RadioGroupPrimitive.Item
	{...rest}
	class={cn(
		'group flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[state=checked]:bg-primary',
		className
	)}
>
	<span
		class="size-2 rounded-full bg-current opacity-0 transition-opacity group-data-[state=checked]:opacity-100"
	></span>
	{@render children?.()}
</RadioGroupPrimitive.Item>

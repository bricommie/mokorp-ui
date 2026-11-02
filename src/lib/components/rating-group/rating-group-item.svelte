<script lang="ts">
	import { RatingGroup as RatingGroupPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '../../cn.js';

	type Props = Omit<RatingGroupPrimitive.ItemProps, 'children'> & {
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Structurel (coins nets) — étoile pleine, état via data-state — §4 -->
<RatingGroupPrimitive.Item
	{...rest}
	class={cn(
		'cursor-pointer text-muted-foreground transition-colors data-[state=active]:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
>
	<svg
		class="size-5"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
		/>
	</svg>
	{@render children?.()}
</RatingGroupPrimitive.Item>

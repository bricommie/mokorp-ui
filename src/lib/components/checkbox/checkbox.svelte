<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '../../cn.js';

	type Props = Omit<CheckboxPrimitive.RootProps, 'children'> & {
		children?: Snippet;
	};

	let {
		class: className,
		children,
		checked = $bindable(false),
		indeterminate = $bindable(false),
		...rest
	}: Props = $props();
</script>

<!-- Structurel (coins nets) + indicateur (coche/tiret) piloté par data-state — §3 / §4 -->
<CheckboxPrimitive.Root
	bind:checked
	bind:indeterminate
	{...rest}
	class={cn(
		'group flex size-5 shrink-0 items-center justify-center border-2 border-border bg-background text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary',
		className
	)}
>
	<svg
		class="size-3 opacity-0 transition-opacity group-data-[state=checked]:opacity-100"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="none"
		stroke="currentColor"
		stroke-width="2.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M2.5 8.5l3.5 3.5 7-8" />
	</svg>
	<svg
		class="size-3 opacity-0 transition-opacity group-data-[state=indeterminate]:opacity-100"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="none"
		stroke="currentColor"
		stroke-width="2.5"
		stroke-linecap="round"
		aria-hidden="true"
	>
		<path d="M3 8h10" />
	</svg>
	{@render children?.()}
</CheckboxPrimitive.Root>

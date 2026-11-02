<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';

	type Props = Omit<HTMLInputAttributes, 'class' | 'value'> & {
		class?: string;
		value?: HTMLInputAttributes['value'];
	};

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Structurel (coins nets) + bordure encre 2px + ring primary au focus — §5 -->
<input
	{...rest}
	bind:value
	class={cn(
		'flex h-10 w-full border-2 border-input bg-background px-3 py-2 font-body text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
		className
	)}
/>

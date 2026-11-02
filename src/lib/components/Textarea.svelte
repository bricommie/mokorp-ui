<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';

	type Props = Omit<HTMLTextareaAttributes, 'class' | 'value'> & {
		class?: string;
		value?: HTMLTextareaAttributes['value'];
	};

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Structurel — même langage que `Input`, hauteur libre — §5 -->
<textarea
	{...rest}
	bind:value
	class={cn(
		'rounded-field flex min-h-24 w-full border-(length:--border-width) border-input bg-background px-3 py-2 font-body text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive',
		className
	)}></textarea>

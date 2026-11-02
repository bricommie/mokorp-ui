<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & { class?: string };

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Placeholder de chargement : bloc muted qui pulse (animation coupée si mouvement réduit) -->
<div
	aria-hidden="true"
	{...rest}
	class={cn(
		'rounded-item animate-pulse border-(length:--border-width) border-border bg-muted motion-reduce:animate-none',
		className
	)}
></div>

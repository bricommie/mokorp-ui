<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';
	import { badgeVariants, type BadgeVariant } from './badge.js';

	type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'class'> & {
		variant?: BadgeVariant;
		class?: string;
		children?: Snippet;
	};

	let { variant = 'primary', class: className, children, ...rest }: Props = $props();
</script>

<span {...rest} class={cn(badgeVariants({ variant }), className)}>
	{@render children?.()}
</span>

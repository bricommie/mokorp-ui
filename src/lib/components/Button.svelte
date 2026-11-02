<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';
	import { buttonVariants, type ButtonSize, type ButtonVariant } from './button.js';

	type Props = Omit<HTMLButtonAttributes, 'class' | 'type'> & {
		variant?: ButtonVariant;
		size?: ButtonSize;
		class?: string;
		type?: HTMLButtonAttributes['type'];
		children?: Snippet;
	};

	let {
		variant = 'primary',
		size = 'default',
		class: className,
		type = 'button',
		children,
		...rest
	}: Props = $props();
</script>

<button {...rest} {type} class={cn(buttonVariants({ variant, size }), className)}>
	{@render children?.()}
</button>

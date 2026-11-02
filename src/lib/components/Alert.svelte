<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';
	import { alertVariants, type AlertVariant } from './alert.js';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		variant?: AlertVariant;
		class?: string;
		icon?: Snippet;
		children?: Snippet;
	};

	let { variant = 'default', class: className, icon, children, ...rest }: Props = $props();
</script>

<!-- `role="alert"` pour le destructive (annoncé), `status` sinon — §7 -->
<div
	role={variant === 'destructive' ? 'alert' : 'status'}
	{...rest}
	class={cn(alertVariants({ variant }), !icon && 'grid-cols-1', className)}
>
	{#if icon}{@render icon()}{/if}
	<div class="flex flex-col gap-1">{@render children?.()}</div>
</div>

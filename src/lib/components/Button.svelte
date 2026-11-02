<script lang="ts">
	import { Button as ButtonPrimitive, type WithoutChild } from 'bits-ui';
	import { cn } from '../cn.js';
	import { buttonVariants, type ButtonSize, type ButtonVariant } from './button.js';

	type Props = WithoutChild<ButtonPrimitive.RootProps> & {
		variant?: ButtonVariant;
		size?: ButtonSize;
	};

	let {
		variant = 'primary',
		size = 'default',
		class: className,
		children,
		...rest
	}: Props = $props();
</script>

<ButtonPrimitive.Root {...rest} class={cn(buttonVariants({ variant, size }), className)}>
	{@render children?.()}
</ButtonPrimitive.Root>

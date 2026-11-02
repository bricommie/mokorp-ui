<script lang="ts">
	import { Toggle as TogglePrimitive, type WithoutChild } from 'bits-ui';
	import { cn } from '../cn.js';
	import { toggleVariants, type ToggleSize, type ToggleVariant } from './toggle.js';

	type Props = WithoutChild<TogglePrimitive.RootProps> & {
		variant?: ToggleVariant;
		size?: ToggleSize;
	};

	let {
		variant = 'default',
		size = 'default',
		class: className,
		pressed = $bindable(false),
		...rest
	}: Props = $props();
</script>

<!-- Organique (pill) — variantes via `toggleVariants` (§7). Les enfants (snippet `{ pressed }`) sont
	transmis par `rest` pour conserver le paramètre du snippet primitif. -->
<TogglePrimitive.Root
	bind:pressed
	{...rest}
	class={cn(toggleVariants({ variant, size }), className)}
/>

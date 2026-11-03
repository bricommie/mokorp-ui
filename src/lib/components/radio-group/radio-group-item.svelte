<!--
@component
**RadioGroup.Item** — Une option du groupe (rond avec point intégré). `value` **obligatoire** ; associez un `Label` via `id`.

[API Bits UI](https://bits-ui.com/docs/components/radio-group)
-->
<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '../../cn.js';

	type Props = Omit<RadioGroupPrimitive.ItemProps, 'children'> & {
		/**
		 * Contenu ajouté dans le contrôle, après l'indicateur intégré (le point).
		 * Rarement utile : le libellé se place dans un `Label` à côté.
		 */
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Indicateur organique (rond) + point interne piloté par data-state — §3 / §4 -->
<RadioGroupPrimitive.Item
	{...rest}
	class={cn(
		'group flex aspect-square size-5 shrink-0 items-center justify-center rounded-pill border-(length:--border-width) border-border bg-background text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[state=checked]:border-primary-border data-[state=checked]:bg-primary',
		className
	)}
>
	<span
		class="size-2.5 rounded-pill bg-current opacity-0 transition-opacity group-data-[state=checked]:opacity-100"
	></span>
	{@render children?.()}
</RadioGroupPrimitive.Item>

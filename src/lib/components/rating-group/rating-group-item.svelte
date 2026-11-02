<script lang="ts">
	import { RatingGroup as RatingGroupPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RatingGroupPrimitive.ItemProps;

	let { class: className, children: childrenProp, ...rest }: Props = $props();
</script>

<!-- Étoile : contour encre (inactive) → remplie primary (active) — lisible sans la couleur seule — §4 -->
<RatingGroupPrimitive.Item
	{...rest}
	class={cn(
		'group cursor-pointer text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
>
	{#snippet children({ state })}
		<svg
			class="size-6 fill-transparent stroke-current transition-colors group-data-[state=active]:fill-primary group-data-[state=active]:stroke-foreground group-data-[state=partial]:fill-muted"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke-linejoin="miter"
			aria-hidden="true"
		>
			<path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8z" />
		</svg>
		{@render childrenProp?.({ state })}
	{/snippet}
</RatingGroupPrimitive.Item>

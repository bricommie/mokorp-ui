<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '#lib';

	type Props = {
		/** Légende (noms des composants montrés) — en Georgia italique, §6. */
		caption: string;
		class?: string;
		bodyClass?: string;
		children: Snippet;
	};

	let { caption, class: className, bodyClass, children }: Props = $props();
</script>

<!-- Planche de démonstration : zone vivante + légende séparée par un filet encre (structure = information) -->
<figure
	class={cn(
		'flex flex-col border-(length:--border-width) border-border bg-card text-card-foreground shadow-md',
		className
	)}
>
	<div class={cn('flex flex-1 flex-col gap-4 p-5', bodyClass)}>
		{@render children()}
	</div>
	<figcaption
		class="border-t-(length:--border-width) border-border px-5 py-2.5 font-serif text-sm italic text-muted-foreground"
	>
		{caption}
	</figcaption>
</figure>

<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet; class?: string; fallbackClass?: string };

	let { children, class: className, fallbackClass }: Props = $props();

	let host = $state<HTMLElement>();
	let visible = $state(false);

	// Monte le contenu seulement quand il entre à l'écran.
	// Raison : `Command` appelle `scrollIntoView` sur son premier groupe au montage, ce qui fait
	// défiler toute la page si le composant est monté hors écran.
	$effect(() => {
		if (!host || visible) return;
		const io = new IntersectionObserver(
			(entries) => {
				if (entries.some((e) => e.isIntersecting)) {
					visible = true;
					io.disconnect();
				}
			},
			{ rootMargin: '0px' }
		);
		io.observe(host);
		return () => io.disconnect();
	});
</script>

<div bind:this={host} class={className}>
	{#if visible}
		{@render children()}
	{:else}
		<div class={fallbackClass} aria-hidden="true"></div>
	{/if}
</div>

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Foundations/Motion',
		parameters: { layout: 'padded' }
	});

	const durations = ['instant', 'fast', 'base', 'slow'] as const;
	const easings = ['standard', 'enter', 'exit', 'emphasized'] as const;
</script>

<script lang="ts">
	let played = $state(false);
</script>

<!--
	Planche de référence : chaque rôle de durée / courbe joué côte à côte.
	Basculer « Mouvement » dans la barre d'outils sur « Réduit » : tout devient instantané.
-->
<Story name="Tokens">
	<div class="grid max-w-2xl gap-8 font-body text-foreground">
		<button
			type="button"
			class="w-fit rounded-control border-(length:--border-width) border-primary-border bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
			onclick={() => (played = !played)}
		>
			{played ? 'Revenir' : 'Jouer'}
		</button>

		<section class="grid gap-3">
			<h3 class="text-lg font-bold">
				Durées <span class="text-muted-foreground">(ease-standard)</span>
			</h3>
			{#each durations as d (d)}
				<div class="grid grid-cols-[8rem_1fr] items-center gap-3">
					<code class="font-mono text-xs">--duration-{d}</code>
					<div class="h-8 rounded-item bg-muted">
						<div
							class="size-8 rounded-item bg-secondary transition-transform ease-standard"
							style:transition-duration="var(--duration-{d})"
							style:transform={played ? 'translateX(calc(min(30rem, 60vw)))' : 'none'}
						></div>
					</div>
				</div>
			{/each}
		</section>

		<section class="grid gap-3">
			<h3 class="text-lg font-bold">
				Courbes <span class="text-muted-foreground">(duration-slow)</span>
			</h3>
			{#each easings as e (e)}
				<div class="grid grid-cols-[8rem_1fr] items-center gap-3">
					<code class="font-mono text-xs">--ease-{e}</code>
					<div class="h-8 rounded-item bg-muted">
						<div
							class="size-8 rounded-item border-(length:--border-width) border-primary-border bg-primary transition-transform duration-slow"
							style:transition-timing-function="var(--ease-{e})"
							style:transform={played ? 'translateX(calc(min(30rem, 60vw)))' : 'none'}
						></div>
					</div>
				</div>
			{/each}
		</section>
	</div>
</Story>

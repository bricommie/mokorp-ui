<script lang="ts">
	import ActionsDemos from './demos/ActionsDemos.svelte';
	import DataDemos from './demos/DataDemos.svelte';
	import FormsDemos from './demos/FormsDemos.svelte';
	import NavDemos from './demos/NavDemos.svelte';
	import OverlaysDemos from './demos/OverlaysDemos.svelte';
	import { groups } from './groups.js';

	const intro: Record<string, string> = {
		actions:
			'Tout ce qui déclenche ou bascule quelque chose. Appuyez : le bouton descend sur son ombre.',
		formulaires:
			'Des champs qui se parlent au clavier, avec des dates saisies segment par segment.',
		superpositions:
			'Fenêtres, menus et infobulles. Les ombres dures laissent la place au glow en mode sombre.',
		navigation: 'Se repérer, replier, paginer. Les états ouverts s’inversent en primary.',
		donnees: 'Afficher un état sans bruit : tableaux, jauges, alertes, chargements.'
	};
</script>

<section
	id="composants"
	class="scroll-mt-20 border-t-(length:--border-width) border-border bg-muted/40"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
		<div class="max-w-2xl">
			<h2
				class="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[0.95] tracking-[-0.02em]"
			>
				Chaque composant est monté sur la page
			</h2>
			<p class="mt-4 max-w-xl text-base leading-relaxed">
				Rien n’est une capture d’écran. Tapez, glissez, ouvrez les menus : vous manipulez la
				bibliothèque telle qu’elle sera livrée, dans le thème que vous avez choisi.
			</p>
		</div>

		<div class="mt-14 grid gap-20">
			{#each groups as g, i (g.id)}
				<div id={g.id} class="scroll-mt-24">
					<div
						class="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-2 border-b-(length:--border-width) border-border pb-3"
					>
						<h3 class="font-display text-3xl font-bold tracking-[-0.01em]">{g.label}</h3>
						<p class="max-w-md font-serif text-base italic text-muted-foreground">{intro[g.id]}</p>
					</div>
					{#if i === 0}<ActionsDemos />
					{:else if i === 1}<FormsDemos />
					{:else if i === 2}<OverlaysDemos />
					{:else if i === 3}<NavDemos />
					{:else}<DataDemos />{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

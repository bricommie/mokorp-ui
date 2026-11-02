<script lang="ts">
	import { onMount } from 'svelte';
	import { Button, Icons, Slider } from '#lib';
	import CodeBlock from './CodeBlock.svelte';
	import DeployFace from './DeployFace.svelte';

	// État partagé par les deux faces : agir sur l'une met l'autre à jour.
	let shared = $state({ env: 'staging', traffic: 35, notify: true, build: 64 });

	// Position du volet : part de la face sombre visible à droite (100 = rien, 0 = tout).
	let split = $state(100);

	onMount(() => {
		// Un seul moment orchestré à l'ouverture : le volet balaie de 100 à 52 (ignoré si mouvement réduit).
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
			split = 52;
			return;
		}
		const from = 100;
		const to = 52;
		const duration = 1100;
		const start = performance.now();
		let raf = requestAnimationFrame(function tick(now) {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - t, 4);
			split = Math.round(from + (to - from) * eased);
			if (t < 1) raf = requestAnimationFrame(tick);
		});
		return () => cancelAnimationFrame(raf);
	});
</script>

<section
	id="haut"
	class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-16"
>
	<div class="flex flex-col gap-7">
		<h1
			class="font-display text-[clamp(3rem,7.2vw,6.25rem)] font-bold leading-[0.9] tracking-[-0.03em]"
		>
			Une pièce,<br />deux faces.
		</h1>
		<p class="max-w-[34rem] text-base leading-relaxed">
			mokorp-ui, c’est une bibliothèque de composants Svelte 5 construite sur bits-ui. Une paire
			vert acide et violet : imprimée le jour, néon la nuit. Tout ce qui est à droite est un vrai
			composant, déplacez le volet pour passer d’une face à l’autre.
		</p>
		<div class="flex flex-wrap gap-3">
			<Button size="lg" href="#composants">Explorer les composants<Icons.ArrowRight /></Button>
			<Button size="lg" variant="outline" href="#installer">Installer</Button>
		</div>
		<div class="max-w-[34rem]">
			<CodeBlock wrap code="npm install mokorp-ui bits-ui @internationalized/date" />
		</div>
	</div>

	<div class="flex flex-col gap-4">
		<!-- La pièce : face claire dessous, face sombre dessus, découpée par le volet -->
		<div class="relative h-[34rem] overflow-hidden border-2 border-border shadow-xl sm:h-[32rem]">
			<DeployFace face="light" bind:shared />
			<div class="absolute inset-0" style:clip-path={`inset(0 0 0 ${split}%)`}>
				<DeployFace face="dark" bind:shared decorative={split >= 99} />
			</div>
			<!-- Trait du volet -->
			<div
				aria-hidden="true"
				class="pointer-events-none absolute inset-y-0 w-0.5 bg-foreground"
				style:left={`calc(${split}% - 1px)`}
			></div>
		</div>

		<div class="grid gap-2">
			<Slider.Root
				type="single"
				bind:value={split}
				min={0}
				max={100}
				step={1}
				aria-label="Révéler la face sombre"
			>
				<Slider.Range class="bg-transparent" />
				<Slider.Thumb index={0} aria-label="Position du volet entre les deux faces" />
			</Slider.Root>
			<div class="flex justify-between font-serif text-sm italic text-muted-foreground">
				<span>Imprimé : offset dur, coins nets</span>
				<span>Néon : glow lime, fond profond</span>
			</div>
		</div>
	</div>
</section>

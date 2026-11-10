<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Badge from '#lib/components/Badge.svelte';
	import Button from '#lib/components/Button.svelte';
	import Card from '#lib/components/Card.svelte';

	/*
	 * PROTOTYPE — pistes tirées de la comparaison avec deux sites de référence
	 * (display condensé ultra-gras, tag coloré dédié, grands rayons de surface).
	 * Rien n'est branché dans les composants : on juge ici, sur pièce, avant de
	 * décider ce qui entre dans la spec (docs/design-system.md).
	 */
	const { Story } = defineMeta({
		title: 'Prototypes/Display condensé et highlight',
		tags: ['!autodocs'],
		parameters: { layout: 'padded' },
		argTypes: {
			stretch: {
				name: 'Largeur (wdth)',
				description: 'Axe `wdth` d’Archivo, de 62 % (très condensé) à 125 % (large).',
				control: { type: 'range', min: 62, max: 125, step: 1 },
				table: { category: 'Display' }
			},
			weight: {
				name: 'Graisse',
				control: { type: 'range', min: 600, max: 900, step: 50 },
				table: { category: 'Display' }
			},
			tracking: {
				name: 'Approche (em)',
				control: { type: 'range', min: -0.04, max: 0.04, step: 0.005 },
				table: { category: 'Display' }
			},
			uppercase: {
				name: 'Capitales',
				description:
					'Effet affiche, réservé aux titres courts : les capitales se lisent moins vite.',
				control: 'boolean',
				table: { category: 'Display' }
			},
			radius: {
				name: 'Rayon de surface (px)',
				description: 'Valeur actuelle : 18px. Testée localement, sans toucher au token global.',
				control: { type: 'select' },
				options: [18, 24, 32, 40],
				table: { category: 'Géométrie' }
			}
		},
		args: { stretch: 75, weight: 800, tracking: -0.01, uppercase: false, radius: 24 }
	});

	const tags = ['Produit', 'Annonce', 'Guide'];
</script>

<!--
	Échelle display condensée : actuel (Archivo large, 64px) contre les trois tailles
	fluides proposées. Les sliders jouent sur la largeur, la graisse et l'approche.
-->
<Story name="Display condensé" exportName="DisplayCondense">
	{#snippet template(args)}
		<div
			class="grid max-w-5xl gap-10 font-body text-foreground"
			style:--font-display-stretch="{args.stretch}%"
			style:--tracking-display="{args.tracking}em"
		>
			<section class="grid gap-2">
				<p class="font-mono text-xs text-muted-foreground">Actuel · text-6xl · wdth 115 %</p>
				<p class="font-display text-6xl leading-[0.95] font-black [font-stretch:115%]">
					Construire sans bruit
				</p>
			</section>

			{#each [['lg', 'Construire sans bruit'], ['md', 'Des composants qui tiennent'], ['sm', 'Un seul signal par écran']] as [size, text] (size)}
				<section class="grid gap-2">
					<p class="font-mono text-xs text-muted-foreground">
						text-display-{size} · wdth {args.stretch} % · {args.weight}
					</p>
					<p
						class={[
							'font-display font-stretch-(--font-display-stretch)',
							size === 'lg' && 'text-display-lg',
							size === 'md' && 'text-display-md',
							size === 'sm' && 'text-display-sm',
							args.uppercase && 'uppercase'
						]}
						style:font-weight={args.weight}
					>
						{text}
					</p>
				</section>
			{/each}
		</div>
	{/snippet}
</Story>

<!--
	Token `highlight` : tags et catégories, non interactifs. Comparé aux badges
	existants pour vérifier qu'on ne le confond pas avec une action (lime).
-->
<Story name="Highlight">
	{#snippet template()}
		<div class="grid max-w-4xl gap-6 font-body sm:grid-cols-2">
			{#each ['light', 'dark'] as face (face)}
				<div class={[face, 'grid gap-4 rounded-surface bg-background p-6 text-foreground']}>
					<p class="font-mono text-xs text-muted-foreground">.{face}</p>
					<div class="flex flex-wrap gap-2">
						{#each tags as tag (tag)}
							<span
								class="inline-flex items-center rounded-pill bg-highlight px-2.5 py-0.5 text-xs font-semibold text-highlight-foreground"
							>
								{tag}
							</span>
						{/each}
					</div>
					<div class="flex flex-wrap items-center gap-2">
						<Badge>Primary</Badge>
						<Badge variant="secondary">Secondary</Badge>
						<Badge variant="outline">Outline</Badge>
					</div>
					<Button size="sm" class="w-fit">Action (lime)</Button>
				</div>
			{/each}
		</div>
	{/snippet}
</Story>

<!--
	Composition : carte de contenu avec tag highlight, titre display condensé et
	rayon de surface réglable. Montre les trois pistes ensemble, dans les deux faces.
-->
<Story name="Carte éditoriale" exportName="CarteEditoriale">
	{#snippet template(args)}
		<div
			class="grid max-w-5xl gap-6 font-body md:grid-cols-2"
			style:--font-display-stretch="{args.stretch}%"
			style:--tracking-display="{args.tracking}em"
			style:--radius-surface="{args.radius}px"
		>
			{#each ['light', 'dark'] as face (face)}
				<div class={[face, 'rounded-surface bg-background p-6 text-foreground']}>
					<Card class="grid gap-6 p-8">
						<span
							class="inline-flex w-fit items-center rounded-pill bg-highlight px-2.5 py-0.5 text-xs font-semibold text-highlight-foreground"
						>
							Annonce
						</span>
						<h2
							class={[
								'font-display text-display-sm font-stretch-(--font-display-stretch)',
								args.uppercase && 'uppercase'
							]}
							style:font-weight={args.weight}
						>
							Signal passe en version 1.0
						</h2>
						<p class="max-w-prose text-base leading-normal text-muted-foreground">
							Cinquante composants, deux faces, un seul contrat de tokens. Les thèmes se branchent
							sans toucher au code.
						</p>
						<div class="flex flex-wrap items-center gap-3">
							<Button>Lire l’annonce</Button>
							<span class="font-mono text-xs text-muted-foreground">10 nov. 2026</span>
						</div>
					</Card>
				</div>
			{/each}
		</div>
	{/snippet}
</Story>

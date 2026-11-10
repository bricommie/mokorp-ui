<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Badge from '#lib/components/Badge.svelte';
	import Button from '#lib/components/Button.svelte';
	import Card from '#lib/components/Card.svelte';

	/*
	 * Planche de réglage du display condensé (§6). Les Controls surchargent les tokens
	 * localement (`--font-display-stretch`, `--tracking-display`) : on juge une valeur
	 * ici avant de la changer dans `tokens/global.css`.
	 */
	const { Story } = defineMeta({
		title: 'Fondations/Display condensé',
		// La documentation est dans `src/docs/fondations/Typographie.mdx`.
		tags: ['!autodocs'],
		parameters: { layout: 'padded' },
		argTypes: {
			stretch: {
				name: 'Largeur (wdth)',
				description: 'Axe `wdth` d’Archivo, de 62 % (très condensé) à 125 % (large).',
				control: { type: 'range', min: 62, max: 125, step: 1 },
				table: { category: 'Tokens', defaultValue: { summary: '75' } }
			},
			weight: {
				name: 'Graisse',
				control: { type: 'range', min: 600, max: 900, step: 50 },
				table: { category: 'Utilitaires', defaultValue: { summary: '800' } }
			},
			tracking: {
				name: 'Approche (em)',
				control: { type: 'range', min: -0.04, max: 0.04, step: 0.005 },
				table: { category: 'Tokens', defaultValue: { summary: '-0.01' } }
			},
			uppercase: {
				name: 'Capitales',
				description:
					'Effet affiche, réservé aux titres courts : les capitales se lisent moins vite.',
				control: 'boolean',
				table: { category: 'Utilitaires', defaultValue: { summary: 'false' } }
			}
		},
		args: { stretch: 75, weight: 800, tracking: -0.01, uppercase: false }
	});

	const scale = [
		{ size: 'lg', text: 'Construire sans bruit' },
		{ size: 'md', text: 'Des composants qui tiennent' },
		{ size: 'sm', text: 'Un seul signal par écran' }
	] as const;
</script>

<!-- Les trois tailles fluides, de la plus grande à la plus petite. -->
<Story name="Échelle" exportName="Echelle">
	{#snippet template(args)}
		<div
			class="grid max-w-5xl gap-10 font-body text-foreground"
			style:--font-display-stretch="{args.stretch}%"
			style:--tracking-display="{args.tracking}em"
		>
			{#each scale as { size, text } (size)}
				<section class="grid gap-2">
					<p class="font-mono text-xs text-muted-foreground">
						font-display font-condensed text-display-{size}
					</p>
					<p
						class={[
							'font-display font-condensed',
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

<!-- Composition dans les deux faces : tag `highlight`, titre condensé, action lime. -->
<Story name="Carte éditoriale" exportName="CarteEditoriale">
	{#snippet template(args)}
		<div
			class="grid max-w-5xl gap-6 font-body md:grid-cols-2"
			style:--font-display-stretch="{args.stretch}%"
			style:--tracking-display="{args.tracking}em"
		>
			{#each ['light', 'dark'] as face (face)}
				<div class={[face, 'rounded-surface bg-background p-6 text-foreground']}>
					<Card class="grid gap-6 p-8">
						<Badge variant="highlight" class="w-fit">Annonce</Badge>
						<h2
							class={['font-display font-condensed text-display-sm', args.uppercase && 'uppercase']}
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

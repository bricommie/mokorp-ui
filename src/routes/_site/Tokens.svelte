<script lang="ts">
	import { Badge, Avatar, Button } from '#lib';

	// Les nuances sont lues dans les tokens sémantiques : elles suivent le thème actif.
	const swatches = [
		{ name: 'background', cls: 'bg-background', fg: 'text-foreground', role: 'Fond de page' },
		{ name: 'card', cls: 'bg-card', fg: 'text-card-foreground', role: 'Surfaces et cartes' },
		{
			name: 'primary',
			cls: 'bg-primary',
			fg: 'text-primary-foreground',
			role: 'Action et état actif'
		},
		{
			name: 'secondary',
			cls: 'bg-secondary',
			fg: 'text-secondary-foreground',
			role: 'Action secondaire'
		},
		{ name: 'muted', cls: 'bg-muted', fg: 'text-muted-foreground', role: 'Survol, pistes, plages' },
		{
			name: 'destructive',
			cls: 'bg-destructive',
			fg: 'text-destructive-foreground',
			role: 'Erreur, suppression'
		},
		{
			name: 'foreground',
			cls: 'bg-foreground',
			fg: 'text-background',
			role: 'Encre : texte et structure'
		}
	];

	const shadows = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
	const shadowClass: Record<(typeof shadows)[number], string> = {
		xs: 'shadow-xs',
		sm: 'shadow-sm',
		md: 'shadow-md',
		lg: 'shadow-lg',
		xl: 'shadow-xl',
		'2xl': 'shadow-2xl'
	};
</script>

<section id="tokens" class="scroll-mt-20 border-t-2 border-border">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
		<div class="max-w-2xl">
			<h2
				class="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[0.95] tracking-[-0.02em]"
			>
				Changer de thème, c’est changer un bloc CSS
			</h2>
			<p class="mt-4 max-w-xl text-base leading-relaxed">
				Les composants ne connaissent que des noms (<code class="font-mono">primary</code>,
				<code class="font-mono">border</code>, <code class="font-mono">shadow-md</code>), jamais une
				valeur. Un test échoue si un hexadécimal s’y glisse. Basculez le thème : tout ce qui suit se
				redessine.
			</p>
		</div>

		<!-- Palette : lignes pleine largeur, pas de cartes identiques -->
		<div class="mt-12 grid border-2 border-border shadow-md">
			{#each swatches as s, i (s.name)}
				<div
					class="grid grid-cols-[1fr] items-center sm:grid-cols-[12rem_1fr_auto] {s.cls} {s.fg} {i >
					0
						? 'border-t-2 border-border'
						: ''}"
				>
					<span class="px-4 py-3 font-mono text-sm font-semibold sm:py-5">{s.name}</span>
					<span class="px-4 pb-3 font-serif text-sm italic sm:py-5 sm:pb-5">{s.role}</span>
					<span class="hidden px-4 py-5 font-display text-xl font-bold sm:block">Aa</span>
				</div>
			{/each}
		</div>

		<div class="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
			<!-- Typographie -->
			<div class="lg:col-span-7">
				<h3 class="font-display text-2xl font-bold">Trois voix</h3>
				<dl class="mt-5 divide-y-2 divide-border border-y-2 border-border">
					<div class="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:items-baseline">
						<dt class="font-mono text-sm font-semibold">Chakra Petch</dt>
						<dd class="font-display text-4xl font-bold leading-none tracking-[-0.02em]">
							Titres et grands chiffres
						</dd>
					</div>
					<div class="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:items-baseline">
						<dt class="font-mono text-sm font-semibold">IBM Plex Mono</dt>
						<dd class="font-mono text-base">Corps, champs, boutons et données.</dd>
					</div>
					<div class="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:items-baseline">
						<dt class="font-mono text-sm font-semibold">Georgia</dt>
						<dd class="font-serif text-lg italic">Légendes, citations et états vides.</dd>
					</div>
				</dl>

				<h3 class="mt-12 font-display text-2xl font-bold">Structurel ou organique</h3>
				<p class="mt-2 max-w-lg text-sm leading-relaxed">
					Un composant est carré ou rond, jamais un compromis. Les contrôles qui se saisissent à la
					main sont structurels ; ce qui désigne ou compte est organique.
				</p>
				<div class="mt-5 grid gap-5 sm:grid-cols-2">
					<div class="grid gap-3 border-2 border-border bg-card p-4">
						<p class="font-display text-lg font-bold">Structurel</p>
						<div class="flex flex-wrap items-center gap-3">
							<Button size="sm">Bouton</Button><Button size="sm" variant="outline">Champ</Button>
						</div>
					</div>
					<div class="grid gap-3 border-2 border-border bg-card p-4">
						<p class="font-display text-lg font-bold">Organique</p>
						<div class="flex flex-wrap items-center gap-3">
							<Badge>Badge</Badge><Avatar.Root><Avatar.Fallback>MK</Avatar.Fallback></Avatar.Root>
						</div>
					</div>
				</div>
			</div>

			<!-- Élévation -->
			<div class="lg:col-span-5">
				<h3 class="font-display text-2xl font-bold">Élévation</h3>
				<p class="mt-2 max-w-md text-sm leading-relaxed">
					En clair, l’élévation est un décalage net. En sombre, une étendue de lueur. Même nom, deux
					écritures.
				</p>
				<div class="mt-6 grid grid-cols-3 gap-x-8 gap-y-9 pb-3 pr-3">
					{#each shadows as s (s)}
						<div class="grid gap-3">
							<div class="aspect-square border-2 border-border bg-card {shadowClass[s]}"></div>
							<span class="font-mono text-xs">shadow-{s}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

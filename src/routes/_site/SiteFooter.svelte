<script lang="ts">
	import { Button, Icons } from '#lib';
	import { groups, REPO } from './groups.js';
</script>

<footer class="border-t-(length:--border-width) border-border bg-sidebar text-sidebar-foreground">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6">
		<div class="grid gap-10 md:grid-cols-12">
			<div class="md:col-span-6">
				<p
					class="max-w-md text-balance font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[0.95] tracking-[-0.02em]"
				>
					Prêt à retourner la pièce ?
				</p>
				<div class="mt-6 flex flex-wrap gap-3">
					<Button variant="secondary" size="lg" href={REPO}><Icons.Github />Voir le dépôt</Button>
					<Button
						variant="outline"
						size="lg"
						href="#installer"
						class="bg-transparent text-sidebar-foreground hover:bg-sidebar-accent">Installer</Button
					>
				</div>
			</div>
			<nav aria-label="Pied de page" class="grid grid-cols-2 gap-8 md:col-span-6">
				<ul class="grid content-start gap-2 text-sm">
					<li class="font-display text-lg font-bold">Composants</li>
					{#each groups as g (g.id)}
						<li><a class="underline-offset-4 hover:underline" href={`#${g.id}`}>{g.label}</a></li>
					{/each}
				</ul>
				<ul class="grid content-start gap-2 text-sm">
					<li class="font-display text-lg font-bold">Projet</li>
					<li><a class="underline-offset-4 hover:underline" href="#tokens">Tokens</a></li>
					<li><a class="underline-offset-4 hover:underline" href="#installer">Installer</a></li>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- lien externe -->
					<li><a class="underline-offset-4 hover:underline" href={REPO}>GitHub</a></li>
				</ul>
			</nav>
		</div>
		<p
			class="mt-12 border-t-(length:--border-width) border-sidebar-border pt-5 font-serif text-sm italic opacity-80"
		>
			mokorp-ui, version 0.0.1. Svelte 5, bits-ui et Tailwind 4.
		</p>
	</div>
</footer>

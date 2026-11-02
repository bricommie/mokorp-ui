<script lang="ts">
	import { Accordion, Badge, Collapsible, Icons, Menubar, Pagination, Separator, Tabs } from '#lib';
	import Plate from '../Plate.svelte';

	let tab = $state('journal');
	let page = $state(3);
	let openPanel = $state<string>('install');
	let moreOpen = $state(false);
	let view = $state('liste');
	let showGrid = $state(true);
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-12">
	<Plate
		class="md:col-span-7"
		caption="Tabs : le soulignement primary recouvre le filet encre de la liste."
	>
		<Tabs.Root bind:value={tab}>
			<Tabs.List aria-label="Détails du déploiement">
				<Tabs.Trigger value="journal">Journal</Tabs.Trigger>
				<Tabs.Trigger value="variables">Variables</Tabs.Trigger>
				<Tabs.Trigger value="domaines">Domaines</Tabs.Trigger>
				<Tabs.Trigger value="historique" disabled>Historique</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="journal" class="pt-4">
				<pre class="overflow-x-auto font-mono text-xs leading-relaxed">12:04:11 build démarré
12:04:38 1 204 modules transformés
12:04:52 sortie : 312 kB, gzip 98 kB
12:04:53 déploiement prêt</pre>
			</Tabs.Content>
			<Tabs.Content value="variables" class="pt-4">
				<p>PUBLIC_API_URL, PUBLIC_THEME et 4 autres variables, toutes chiffrées au repos.</p>
			</Tabs.Content>
			<Tabs.Content value="domaines" class="pt-4">
				<p>exemple.dev et www.exemple.dev pointent vers ce déploiement.</p>
			</Tabs.Content>
		</Tabs.Root>
	</Plate>

	<Plate
		class="md:col-span-5"
		caption="Pagination (pilules) et Menubar : le menu ouvert s’inverse en primary."
	>
		<Pagination.Root count={118} perPage={10} bind:page siblingCount={1}>
			{#snippet children({ pages })}
				<Pagination.PrevButton aria-label="Page précédente" />
				{#each pages as p (p.key)}
					{#if p.type === 'ellipsis'}
						<span aria-hidden="true" class="px-1 font-mono">…</span>
					{:else}
						<Pagination.Page page={p}>{p.value}</Pagination.Page>
					{/if}
				{/each}
				<Pagination.NextButton aria-label="Page suivante" />
			{/snippet}
		</Pagination.Root>
		<p class="font-mono text-xs text-muted-foreground">page {page} sur 12</p>
		<Separator />
		<Menubar.Root>
			<Menubar.Menu>
				<Menubar.Trigger>Fichier</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content class="w-52">
						<Menubar.Item>Nouveau projet <Menubar.Shortcut>⌘ N</Menubar.Shortcut></Menubar.Item>
						<Menubar.Item>Ouvrir… <Menubar.Shortcut>⌘ O</Menubar.Shortcut></Menubar.Item>
						<Menubar.Separator />
						<Menubar.Item>Exporter</Menubar.Item>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger>Affichage</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content class="w-52">
						<Menubar.CheckboxItem bind:checked={showGrid}>Grille</Menubar.CheckboxItem>
						<Menubar.Separator />
						<Menubar.RadioGroup bind:value={view}>
							<Menubar.RadioItem value="liste">En liste</Menubar.RadioItem>
							<Menubar.RadioItem value="cartes">En cartes</Menubar.RadioItem>
						</Menubar.RadioGroup>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger>Aide</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content class="w-44"
						><Menubar.Item>Documentation</Menubar.Item><Menubar.Item>Raccourcis</Menubar.Item
						></Menubar.Content
					>
				</Menubar.Portal>
			</Menubar.Menu>
		</Menubar.Root>
		<p class="font-mono text-xs text-muted-foreground">
			vue : {view}, grille : {showGrid ? 'oui' : 'non'}
		</p>
	</Plate>

	<Plate
		class="md:col-span-7"
		caption="Accordion : le chevron pivote et la hauteur s’anime, sauf si le mouvement est réduit."
	>
		<Accordion.Root type="single" bind:value={openPanel} class="border-t-2 border-border">
			<Accordion.Item value="install">
				<Accordion.Header
					><Accordion.Trigger>Comment installer le thème ?</Accordion.Trigger></Accordion.Header
				>
				<Accordion.Content
					>Importez <code class="font-mono">mokorp-ui/theme.css</code> une seule fois à la racine de l’application.</Accordion.Content
				>
			</Accordion.Item>
			<Accordion.Item value="dark">
				<Accordion.Header
					><Accordion.Trigger>Comment activer le mode sombre ?</Accordion.Trigger></Accordion.Header
				>
				<Accordion.Content
					>Ajoutez la classe <code class="font-mono">dark</code> sur la balise html, ou utilisez le ThemeToggle.</Accordion.Content
				>
			</Accordion.Item>
			<Accordion.Item value="theme">
				<Accordion.Header
					><Accordion.Trigger>Peut-on ajouter un thème ?</Accordion.Trigger></Accordion.Header
				>
				<Accordion.Content
					>Oui : un bloc CSS qui réassigne les tokens sémantiques, sans toucher aux composants.</Accordion.Content
				>
			</Accordion.Item>
		</Accordion.Root>
	</Plate>
	<Plate
		class="md:col-span-5"
		caption="Collapsible : un seul panneau, déclenché à la main. L’état se lit aussi dans le libellé."
	>
		<Collapsible.Root bind:open={moreOpen} class="grid gap-3">
			<div class="flex items-center justify-between gap-3">
				<p class="font-semibold">Fichiers modifiés <Badge variant="outline">3</Badge></p>
				<Collapsible.Trigger>
					{moreOpen ? 'Replier' : 'Déplier'}
					<Icons.ChevronDown class="size-4 transition-transform {moreOpen ? 'rotate-180' : ''}" />
				</Collapsible.Trigger>
			</div>
			<p class="border-2 border-border bg-background px-3 py-2 font-mono text-xs">
				src/lib/components/Button.svelte
			</p>
			<Collapsible.Content class="grid gap-3">
				<p class="border-2 border-border bg-background px-3 py-2 font-mono text-xs">
					src/lib/components/select/select-item.svelte
				</p>
				<p class="border-2 border-border bg-background px-3 py-2 font-mono text-xs">
					src/lib/theme/tokens/components.css
				</p>
			</Collapsible.Content>
		</Collapsible.Root>
	</Plate>
</div>

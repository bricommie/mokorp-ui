<script lang="ts">
	import {
		AlertDialog,
		Badge,
		Button,
		Command,
		ContextMenu,
		Dialog,
		DropdownMenu,
		Icons,
		Input,
		Kbd,
		Label,
		LinkPreview,
		Popover,
		Switch,
		Tooltip
	} from '#lib';
	import LazyMount from '../LazyMount.svelte';
	import Plate from '../Plate.svelte';
	import { REPO } from '../groups.js';

	let renameOpen = $state(false);
	let projectName = $state('mokorp-ui');
	let savedName = $state('mokorp-ui');

	let showStats = $state(true);
	let density = $state('normal');
	let deleted = $state(false);
	let lastAction = $state('Aucune action');

	const tips = [
		{ label: 'Copier', Icon: Icons.Copy },
		{ label: 'Calendrier', Icon: Icons.Calendar },
		{ label: 'Thème', Icon: Icons.Moon }
	];

	let ctxPinned = $state(false);
	let dense = $state(false);
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-12">
	<Plate
		class="md:col-span-5"
		caption="Dialog et AlertDialog : bornés à la fenêtre, fermeture au clavier, focus piégé."
	>
		<div class="flex flex-wrap gap-3">
			<Dialog.Root bind:open={renameOpen}>
				<Dialog.Trigger>
					{#snippet child({ props })}<Button variant="outline" {...props}>Renommer le projet</Button
						>{/snippet}
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay />
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title>Renommer le projet</Dialog.Title>
							<Dialog.Description
								>Le nouveau nom apparaît dans tous les déploiements.</Dialog.Description
							>
						</Dialog.Header>
						<div class="grid gap-2">
							<Label for="d-name">Nom</Label>
							<Input id="d-name" bind:value={projectName} />
						</div>
						<Dialog.Footer>
							<Dialog.Close>
								{#snippet child({ props })}<Button variant="outline" {...props}>Annuler</Button
									>{/snippet}
							</Dialog.Close>
							<Button
								onclick={() => {
									savedName = projectName;
									renameOpen = false;
								}}>Enregistrer</Button
							>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>

			<AlertDialog.Root>
				<AlertDialog.Trigger>
					{#snippet child({ props })}<Button variant="destructive" {...props}>Supprimer</Button
						>{/snippet}
				</AlertDialog.Trigger>
				<AlertDialog.Portal>
					<AlertDialog.Overlay />
					<AlertDialog.Content>
						<AlertDialog.Header>
							<AlertDialog.Title>Supprimer « {savedName} » ?</AlertDialog.Title>
							<AlertDialog.Description>
								Les 14 déploiements et leurs journaux seront supprimés. Cette action est définitive.
							</AlertDialog.Description>
						</AlertDialog.Header>
						<AlertDialog.Footer>
							<AlertDialog.Cancel>Garder le projet</AlertDialog.Cancel>
							<AlertDialog.Action variant="destructive" onclick={() => (deleted = true)}>
								Supprimer définitivement
							</AlertDialog.Action>
						</AlertDialog.Footer>
					</AlertDialog.Content>
				</AlertDialog.Portal>
			</AlertDialog.Root>
		</div>
		<p class="text-sm">
			Projet : <span class="font-semibold">{deleted ? 'supprimé (simulation)' : savedName}</span>
		</p>
	</Plate>

	<Plate
		class="md:col-span-7"
		caption="Popover, Tooltip et LinkPreview : surfaces flottantes, décalées pour laisser respirer l’ombre."
	>
		<div class="flex flex-wrap items-center gap-3">
			<Popover.Root>
				<Popover.Trigger>
					{#snippet child({ props })}<Button variant="outline" {...props}
							>Affichage<Icons.ChevronDown /></Button
						>{/snippet}
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content>
						<div class="grid gap-3">
							<p class="font-display text-lg font-bold">Affichage</p>
							<label class="flex items-center justify-between gap-3 text-sm">
								Afficher les statistiques
								<Switch.Root bind:checked={showStats}><Switch.Thumb /></Switch.Root>
							</label>
							<label class="flex items-center justify-between gap-3 text-sm">
								Mode dense
								<Switch.Root bind:checked={dense}><Switch.Thumb /></Switch.Root>
							</label>
						</div>
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>

			{#each tips as { label, Icon } (label)}
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<Button size="icon" variant="outline" aria-label={label} {...props}><Icon /></Button>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Portal><Tooltip.Content>{label}</Tooltip.Content></Tooltip.Portal>
				</Tooltip.Root>
			{/each}

			<LinkPreview.Root>
				<LinkPreview.Trigger
					href={REPO}
					class="font-semibold underline decoration-2 underline-offset-4 hover:bg-muted"
				>
					bricommie/mokorp-ui
				</LinkPreview.Trigger>
				<LinkPreview.Portal>
					<LinkPreview.Content class="w-72">
						<p class="font-display text-lg font-bold">mokorp-ui</p>
						<p class="mt-1 text-sm text-muted-foreground">
							Composants Svelte 5, thème Signal, tokens sémantiques.
						</p>
						<div class="mt-3 flex gap-2">
							<Badge variant="outline">Svelte 5</Badge><Badge variant="outline">Tailwind 4</Badge>
						</div>
					</LinkPreview.Content>
				</LinkPreview.Portal>
			</LinkPreview.Root>
		</div>
		<p class="font-mono text-xs text-muted-foreground">
			statistiques : {showStats ? 'visibles' : 'masquées'}, densité : {dense ? 'dense' : 'normale'}
		</p>
	</Plate>

	<Plate
		class="md:col-span-6"
		caption="DropdownMenu et ContextMenu : coches, points, sous-menus et raccourcis. Clic droit dans la zone."
	>
		<div class="grid gap-4">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}<Button variant="outline" {...props}
							>Actions<Icons.ChevronDown /></Button
						>{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content class="w-60">
						<DropdownMenu.Group>
							<DropdownMenu.GroupHeading>Déploiement</DropdownMenu.GroupHeading>
							<DropdownMenu.Item onSelect={() => (lastAction = 'Relancé')}>
								Relancer <DropdownMenu.Shortcut>R</DropdownMenu.Shortcut>
							</DropdownMenu.Item>
							<DropdownMenu.Item onSelect={() => (lastAction = 'Dupliqué')}>
								Dupliquer <DropdownMenu.Shortcut>D</DropdownMenu.Shortcut>
							</DropdownMenu.Item>
						</DropdownMenu.Group>
						<DropdownMenu.Separator />
						<DropdownMenu.CheckboxItem bind:checked={showStats}
							>Statistiques</DropdownMenu.CheckboxItem
						>
						<DropdownMenu.RadioGroup bind:value={density}>
							<DropdownMenu.RadioItem value="normal">Densité normale</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="dense">Densité forte</DropdownMenu.RadioItem>
						</DropdownMenu.RadioGroup>
						<DropdownMenu.Separator />
						<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger>Exporter</DropdownMenu.SubTrigger>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item onSelect={() => (lastAction = 'Export CSV')}
									>En CSV</DropdownMenu.Item
								>
								<DropdownMenu.Item onSelect={() => (lastAction = 'Export JSON')}
									>En JSON</DropdownMenu.Item
								>
							</DropdownMenu.SubContent>
						</DropdownMenu.Sub>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>

			<ContextMenu.Root>
				<ContextMenu.Trigger
					class="flex h-36 w-full items-center justify-center border-(length:--border-width) border-dashed border-border bg-background px-4 text-center font-serif text-sm italic text-muted-foreground"
				>
					Clic droit ici
				</ContextMenu.Trigger>
				<ContextMenu.Portal>
					<ContextMenu.Content class="w-52">
						<ContextMenu.CheckboxItem bind:checked={ctxPinned}>Épingler</ContextMenu.CheckboxItem>
						<ContextMenu.Item onSelect={() => (lastAction = 'Lien copié')}>
							Copier le lien <ContextMenu.Shortcut>C</ContextMenu.Shortcut>
						</ContextMenu.Item>
						<ContextMenu.Separator />
						<ContextMenu.Item onSelect={() => (lastAction = 'Archivé')}>Archiver</ContextMenu.Item>
					</ContextMenu.Content>
				</ContextMenu.Portal>
			</ContextMenu.Root>
		</div>
		<p class="font-mono text-xs text-muted-foreground" aria-live="polite">
			dernière action : {lastAction}, densité : {density}, épinglé : {ctxPinned ? 'oui' : 'non'}
		</p>
	</Plate>

	<Plate
		class="md:col-span-6"
		caption="Command : palette de recherche avec groupes, état vide et raccourcis."
	>
		<LazyMount fallbackClass="h-72 border-(length:--border-width) border-border bg-popover">
			<Command.Root class="h-72">
				<Command.Input placeholder="Chercher une action…" />
				<Command.List>
					<Command.Viewport>
						<Command.Empty>Aucune action ne correspond.</Command.Empty>
						<Command.Group value="deploy">
							<Command.GroupHeading>Déploiement</Command.GroupHeading>
							<Command.GroupItems>
								<Command.Item value="Lancer un déploiement"
									>Lancer un déploiement <Kbd class="ml-auto">⌘ D</Kbd></Command.Item
								>
								<Command.Item value="Revenir à la version précédente"
									>Revenir à la version précédente</Command.Item
								>
							</Command.GroupItems>
						</Command.Group>
						<Command.Separator />
						<Command.Group value="project">
							<Command.GroupHeading>Projet</Command.GroupHeading>
							<Command.GroupItems>
								<Command.Item value="Inviter un membre"
									>Inviter un membre <Kbd class="ml-auto">⌘ I</Kbd></Command.Item
								>
								<Command.Item value="Ouvrir les réglages"
									>Ouvrir les réglages <Kbd class="ml-auto">⌘ ,</Kbd></Command.Item
								>
							</Command.GroupItems>
						</Command.Group>
					</Command.Viewport>
				</Command.List>
			</Command.Root>
		</LazyMount>
	</Plate>
</div>

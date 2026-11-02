<script lang="ts">
	import {
		Alert,
		AspectRatio,
		Avatar,
		Badge,
		Icons,
		Kbd,
		Meter,
		Progress,
		ScrollArea,
		Separator,
		Skeleton,
		Table
	} from '#lib';
	import Plate from '../Plate.svelte';

	const rows = [
		{
			id: 'd-2841',
			branch: 'main',
			status: 'Prêt',
			variant: 'primary',
			time: '12:04',
			dur: '49 s'
		},
		{
			id: 'd-2840',
			branch: 'fix/header',
			status: 'Échec',
			variant: 'destructive',
			time: '11:31',
			dur: '1 min 12 s'
		},
		{
			id: 'd-2839',
			branch: 'release/2.4',
			status: 'En cours',
			variant: 'secondary',
			time: '11:02',
			dur: '34 s'
		},
		{ id: 'd-2838', branch: 'main', status: 'Prêt', variant: 'primary', time: 'hier', dur: '51 s' }
	] as const;

	const logs = [
		'12:04:11 installation des dépendances',
		'12:04:19 compilation des composants',
		'12:04:27 génération des types',
		'12:04:33 optimisation des images',
		'12:04:38 1 204 modules transformés',
		'12:04:46 minification',
		'12:04:52 sortie : 312 kB, gzip 98 kB',
		'12:04:53 déploiement prêt'
	];
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-12">
	<Plate
		class="md:col-span-8"
		caption="Table : en-têtes en motif Label, filets encre, survol de ligne discret."
	>
		<Table.Root>
			<Table.Caption>Derniers déploiements du projet</Table.Caption>
			<Table.Header>
				<Table.Row>
					<Table.Head>Version</Table.Head>
					<Table.Head>Branche</Table.Head>
					<Table.Head>Statut</Table.Head>
					<Table.Head class="text-right">Durée</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each rows as r (r.id)}
					<Table.Row>
						<Table.Cell class="font-mono">{r.id}</Table.Cell>
						<Table.Cell>{r.branch}</Table.Cell>
						<Table.Cell><Badge variant={r.variant}>{r.status}</Badge></Table.Cell>
						<Table.Cell class="text-right tabular-nums">{r.dur}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Plate>

	<Plate class="md:col-span-4" caption="Progress, Meter, Avatar, Skeleton et Kbd.">
		<div class="grid gap-2">
			<span class="text-sm font-semibold">Build en cours</span>
			<Progress value={72} aria-label="Build en cours" />
		</div>
		<div class="grid gap-2">
			<span class="text-sm font-semibold">Préparation</span>
			<Progress value={null} aria-label="Préparation en cours" />
		</div>
		<div class="grid gap-2">
			<div class="flex justify-between text-sm">
				<span class="font-semibold">Quota de bande passante</span><span class="tabular-nums"
					>68 %</span
				>
			</div>
			<Meter value={68} aria-label="Bande passante utilisée" />
		</div>
		<Separator />
		<div class="flex items-center gap-3">
			<Avatar.Root><Avatar.Fallback>MK</Avatar.Fallback></Avatar.Root>
			<Avatar.Root class="size-12"
				><Avatar.Fallback class="bg-secondary text-secondary-foreground">AL</Avatar.Fallback
				></Avatar.Root
			>
			<Avatar.Root class="size-14"
				><Avatar.Fallback class="bg-primary text-primary-foreground">JR</Avatar.Fallback
				></Avatar.Root
			>
			<p class="ml-auto text-sm"><Kbd>⌘</Kbd> <Kbd>K</Kbd></p>
		</div>
		<div class="flex items-center gap-3">
			<Skeleton class="size-12 shrink-0 rounded-full" />
			<div class="grid flex-1 gap-2">
				<Skeleton class="h-4 w-3/4" /><Skeleton class="h-4 w-1/2" />
			</div>
		</div>
	</Plate>

	<Plate
		class="md:col-span-5"
		caption="Alert : annoncée à voix haute quand elle signale une erreur."
	>
		<Alert>
			{#snippet icon()}<Icons.Check />{/snippet}
			<p class="font-display text-lg font-bold leading-tight">Déploiement terminé</p>
			<p>La version d-2841 est servie à 100 % du trafic.</p>
		</Alert>
		<Alert variant="destructive">
			{#snippet icon()}<Icons.X />{/snippet}
			<p class="font-display text-lg font-bold leading-tight">Le build a échoué</p>
			<p>
				Le module header.svelte importe un fichier introuvable. Corrigez l’import puis relancez.
			</p>
		</Alert>
	</Plate>

	<Plate class="md:col-span-7" caption="ScrollArea, Separator et AspectRatio.">
		<div class="grid gap-5 sm:grid-cols-2">
			<ScrollArea.Root class="h-44 border-2 border-border bg-background">
				<ScrollArea.Viewport class="p-3">
					<ul class="grid gap-2 font-mono text-xs">
						{#each logs as line (line)}<li>{line}</li>{/each}
					</ul>
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar orientation="vertical"><ScrollArea.Thumb /></ScrollArea.Scrollbar>
			</ScrollArea.Root>
			<AspectRatio
				ratio={4 / 3}
				class="border-2 border-border bg-[repeating-linear-gradient(135deg,var(--muted)_0_10px,var(--card)_10px_20px)]"
			>
				<div class="flex h-full items-center justify-center font-serif text-sm italic">
					Ratio 4 : 3
				</div>
			</AspectRatio>
		</div>
	</Plate>
</div>

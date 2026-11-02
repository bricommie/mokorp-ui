<script lang="ts">
	import { Badge, Button, Icons, Separator, Toggle, ToggleGroup, Toolbar } from '#lib';
	import Plate from '../Plate.svelte';

	let starred = $state(true);
	let align = $state('left');
	let marks = $state<string[]>(['bold']);
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-12">
	<Plate
		class="md:col-span-7"
		caption="Button : cinq variantes, trois tailles, un état désactivé. Badge : quatre variantes."
	>
		<div class="flex flex-wrap items-center gap-3">
			<Button>Déployer</Button>
			<Button variant="secondary">Programmer</Button>
			<Button variant="outline">Aperçu</Button>
			<Button variant="ghost">Ignorer</Button>
			<Button variant="link">Voir le journal</Button>
			<Button variant="destructive">Supprimer</Button>
		</div>
		<Separator />
		<div class="flex flex-wrap items-center gap-3">
			<Button size="sm">Petit</Button>
			<Button>Moyen</Button>
			<Button size="lg">Grand</Button>
			<Button size="icon" aria-label="Copier le lien"><Icons.Copy /></Button>
			<Button disabled>Indisponible</Button>
		</div>
		<Separator />
		<div class="flex flex-wrap items-center gap-3">
			<Badge>Nouveau</Badge>
			<Badge variant="secondary">Bêta</Badge>
			<Badge variant="outline">Brouillon</Badge>
			<Badge variant="destructive">Échec</Badge>
		</div>
	</Plate>

	<Plate
		class="md:col-span-5"
		caption="Toggle, ToggleGroup et Toolbar : l’état actif passe en primary, la bordure reste encre."
	>
		<div class="flex flex-wrap items-center gap-3">
			<Toggle bind:pressed={starred} aria-label="Favori">
				<Icons.Check />{starred ? 'Suivi' : 'Suivre'}
			</Toggle>
			<ToggleGroup.Root type="single" bind:value={align} aria-label="Alignement">
				<ToggleGroup.Item value="left">Gauche</ToggleGroup.Item>
				<ToggleGroup.Item value="center">Centre</ToggleGroup.Item>
				<ToggleGroup.Item value="right">Droite</ToggleGroup.Item>
			</ToggleGroup.Root>
		</div>
		<Toolbar.Root
			aria-label="Mise en forme"
			class="flex-wrap border-2 border-border bg-background p-1"
		>
			<Toolbar.Group type="multiple" bind:value={marks} aria-label="Style du texte">
				<Toolbar.GroupItem value="bold" class="font-bold" aria-label="Gras">G</Toolbar.GroupItem>
				<Toolbar.GroupItem value="italic" class="italic" aria-label="Italique">I</Toolbar.GroupItem>
				<Toolbar.GroupItem value="underline" class="underline" aria-label="Souligné"
					>S</Toolbar.GroupItem
				>
			</Toolbar.Group>
			<Separator orientation="vertical" class="mx-1 h-6" />
			<Toolbar.Button>Citer</Toolbar.Button>
			<Toolbar.Link href="#formulaires">Formulaires</Toolbar.Link>
		</Toolbar.Root>
		<p class="font-mono text-xs text-muted-foreground">
			style : {marks.length ? marks.join(', ') : 'aucun'}
		</p>
	</Plate>
</div>

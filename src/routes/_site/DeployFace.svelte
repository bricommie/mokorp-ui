<script lang="ts">
	import { Avatar, Badge, Button, Icons, Progress, Slider, Switch, ToggleGroup } from '#lib';

	type Shared = { env: string; traffic: number; notify: boolean; build: number };

	type Props = {
		/** Thème forcé de cette face (zone imbriquée : `.light` ou `.dark`). */
		face: 'light' | 'dark';
		shared: Shared;
		/** `aria-hidden` + inert pour la copie décorative sous le clip. */
		decorative?: boolean;
	};

	let { face, shared = $bindable(), decorative = false }: Props = $props();

	const envs = [
		{ value: 'preview', label: 'Preview' },
		{ value: 'staging', label: 'Staging' },
		{ value: 'prod', label: 'Prod' }
	];
	const id = $derived(`deploy-${face}`);
</script>

<!--
	Une « face » : zone qui force son propre thème (`.light` / `.dark`) quel que soit celui de la page.
	Les deux faces partagent le même état → manipuler l'une met à jour l'autre.
-->
<div
	class="{face} absolute inset-0 flex flex-col gap-5 bg-background p-5 text-foreground sm:p-7"
	inert={decorative || undefined}
	aria-hidden={decorative || undefined}
>
	<div class="flex items-start justify-between gap-3">
		<div>
			<h2 class="font-display text-2xl font-bold sm:text-3xl">Nouveau déploiement</h2>
			<p class="mt-1 font-serif text-sm italic text-muted-foreground">
				Branche main, 3 commits en attente
			</p>
		</div>
		<Badge variant={shared.env === 'prod' ? 'destructive' : 'primary'}>{shared.env}</Badge>
	</div>

	<div class="grid gap-2">
		<span class="font-body text-sm font-semibold" id={`${id}-env`}>Environnement</span>
		<ToggleGroup.Root type="single" bind:value={shared.env} aria-labelledby={`${id}-env`}>
			{#each envs as e (e.value)}
				<ToggleGroup.Item value={e.value}>{e.label}</ToggleGroup.Item>
			{/each}
		</ToggleGroup.Root>
	</div>

	<div class="grid gap-3">
		<div class="flex items-baseline justify-between">
			<span class="font-body text-sm font-semibold" id={`${id}-traffic`}>Trafic servi</span>
			<span class="font-display text-2xl font-bold tabular-nums">{shared.traffic} %</span>
		</div>
		<Slider.Root
			type="single"
			bind:value={shared.traffic}
			min={0}
			max={100}
			step={5}
			aria-labelledby={`${id}-traffic`}
		>
			<Slider.Range />
			<Slider.Thumb index={0} aria-labelledby={`${id}-traffic`} />
		</Slider.Root>
	</div>

	<div class="grid gap-2">
		<div class="flex items-baseline justify-between font-body text-sm font-semibold">
			<span>Build</span><span class="tabular-nums">{shared.build} %</span>
		</div>
		<Progress value={shared.build} aria-label="Progression du build" />
	</div>

	<label class="flex cursor-pointer items-center justify-between gap-3 text-sm">
		<span>Prévenir l’équipe</span>
		<Switch.Root bind:checked={shared.notify}><Switch.Thumb /></Switch.Root>
	</label>

	<div class="mt-auto flex items-center justify-between gap-3">
		<div class="flex -space-x-2">
			{#each ['MK', 'AL', 'JR'] as who (who)}
				<Avatar.Root class="size-9 bg-card text-xs font-semibold">
					<Avatar.Fallback>{who}</Avatar.Fallback>
				</Avatar.Root>
			{/each}
		</div>
		<div class="flex gap-2">
			<Button variant="outline">Annuler</Button>
			<Button>Déployer<Icons.ArrowRight /></Button>
		</div>
	</div>
</div>

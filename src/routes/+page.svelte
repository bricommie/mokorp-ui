<script lang="ts">
	import { Button, Card, Badge, Input, Label } from '#lib';

	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<svelte:head>
	<title>mokorp-ui — Acid Terminal</title>
</svelte:head>

<main class="mx-auto flex max-w-2xl flex-col gap-6 p-8">
	<header class="flex items-center justify-between gap-4">
		<h1 class="font-display text-3xl font-bold uppercase">mokorp-ui</h1>
		<Button variant="outline" size="sm" onclick={toggleTheme}>Toggle dark</Button>
	</header>

	<p class="text-sm">
		Système de design néo-brutaliste «&nbsp;Acid Terminal&nbsp;» — paire vert ⇄ violet inversée
		entre les modes.
	</p>

	<section class="flex flex-col gap-3">
		<Label>Buttons</Label>
		<div class="flex flex-wrap items-center gap-3">
			<Button>Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="destructive">Destructive</Button>
		</div>
	</section>

	<section class="flex flex-col gap-3">
		<Label>Badges</Label>
		<div class="flex flex-wrap items-center gap-3">
			<Badge>New</Badge>
			<Badge variant="secondary">Beta</Badge>
			<Badge variant="outline">Draft</Badge>
			<Badge variant="destructive">Error</Badge>
		</div>
	</section>

	<section class="flex flex-col gap-3">
		<Label for="demo-input">Input</Label>
		<Input id="demo-input" placeholder="Type something…" />
	</section>

	<section class="grid gap-4 sm:grid-cols-2">
		<Card>
			<div class="p-4">
				<p class="font-display text-lg font-bold">Card</p>
				<p class="mt-1 text-sm">Structurel, bordure encre, ombre d'élévation.</p>
			</div>
		</Card>
		<Card>
			<div class="p-4">
				<p class="font-display text-lg font-bold">Thème</p>
				<p class="mt-1 text-sm">
					Light = offset dur · Dark = glow lime. Basculez avec le bouton en haut.
				</p>
			</div>
		</Card>
	</section>
</main>

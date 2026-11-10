<script lang="ts">
	import { Tabs } from '#lib';
	import CodeBlock from './CodeBlock.svelte';

	const installs = {
		npm: 'npm install mokorp-ui bits-ui @internationalized/date',
		pnpm: 'pnpm add mokorp-ui bits-ui @internationalized/date',
		bun: 'bun add mokorp-ui bits-ui @internationalized/date'
	} as const;

	const theme = `// src/routes/+layout.svelte
import 'mokorp-ui/theme.css';`;

	const usage = `<script lang="ts">
  import { Button, Dialog, Select } from 'mokorp-ui';
  let open = $state(false);
${'<'}/script>

<Button onclick={() => (open = true)}>Ouvrir</Button>

<Dialog.Root bind:open>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Bonjour</Dialog.Title>
      </Dialog.Header>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>`;
</script>

<section
	id="installer"
	class="scroll-mt-20 border-t-(length:--border-width) border-border bg-muted/40"
>
	<div
		class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24"
	>
		<div class="min-w-0 lg:col-span-5">
			<h2 class="font-display font-condensed text-display-sm font-extrabold">
				Trois lignes pour démarrer
			</h2>
			<ol class="mt-6 grid max-w-md gap-4 text-base leading-relaxed">
				<li>
					<span class="font-semibold">Installez</span> la bibliothèque. bits-ui et @internationalized/date
					sont des dépendances à fournir.
				</li>
				<li>
					<span class="font-semibold">Importez le thème</span> une fois, à la racine. Il apporte Tailwind,
					les polices et les tokens.
				</li>
				<li>
					<span class="font-semibold">Composez.</span> Les racines acceptent
					<code class="font-mono">bind:</code>, les parties restent à vous.
				</li>
			</ol>
		</div>

		<div class="grid min-w-0 grid-cols-1 content-start gap-6 lg:col-span-7">
			<Tabs.Root value="npm" class="min-w-0">
				<Tabs.List aria-label="Gestionnaire de paquets">
					{#each Object.keys(installs) as pm (pm)}<Tabs.Trigger value={pm}>{pm}</Tabs.Trigger
						>{/each}
				</Tabs.List>
				{#each Object.entries(installs) as [pm, cmd] (pm)}
					<Tabs.Content value={pm} class="pt-4"><CodeBlock wrap code={cmd} /></Tabs.Content>
				{/each}
			</Tabs.Root>
			<CodeBlock code={theme} />
			<CodeBlock code={usage} />
		</div>
	</div>
</section>

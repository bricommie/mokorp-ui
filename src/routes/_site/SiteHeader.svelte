<script lang="ts">
	import { Button, DropdownMenu, Icons, NavigationMenu, ThemeToggle } from '#lib';
	import { groups, REPO } from './groups.js';

	function go(id: string) {
		window.location.hash = id;
	}
</script>

<header class="sticky top-0 z-40 border-b-2 border-border bg-background">
	<div class="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
		<a
			href="#haut"
			class="font-display text-2xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
		>
			mokorp-ui
		</a>

		<!-- Navigation large : NavigationMenu de la bibliothèque -->
		<NavigationMenu.Root class="ml-4 hidden md:flex">
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>Composants</NavigationMenu.Trigger>
					<NavigationMenu.Content>
						<ul class="grid w-[30rem] grid-cols-2 gap-2 p-3">
							{#each groups as g (g.id)}
								<li>
									<NavigationMenu.Link
										href={`#${g.id}`}
										class="h-auto w-full flex-col items-start justify-start gap-0.5 py-2.5 text-left"
									>
										<span>{g.label}</span>
										<span class="text-xs font-normal opacity-80">{g.hint}</span>
									</NavigationMenu.Link>
								</li>
							{/each}
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
				<NavigationMenu.Item
					><NavigationMenu.Link href="#tokens">Tokens</NavigationMenu.Link></NavigationMenu.Item
				>
				<NavigationMenu.Item
					><NavigationMenu.Link href="#installer">Installer</NavigationMenu.Link
					></NavigationMenu.Item
				>
			</NavigationMenu.List>
			<NavigationMenu.Viewport />
		</NavigationMenu.Root>

		<div class="ml-auto flex items-center gap-2">
			<Button variant="ghost" size="sm" href={REPO} class="hidden sm:inline-flex">
				<Icons.Github />GitHub
			</Button>
			<ThemeToggle />

			<!-- Navigation étroite : DropdownMenu -->
			<div class="md:hidden">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						aria-label="Ouvrir la navigation"
						class="inline-flex h-10 items-center gap-1.5 border-2 border-foreground bg-background px-3 font-body text-sm font-semibold"
					>
						Menu <Icons.ChevronDown class="size-3.5" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Portal>
						<DropdownMenu.Content align="end" class="w-56">
							{#each groups as g (g.id)}
								<DropdownMenu.Item onSelect={() => go(g.id)}>{g.label}</DropdownMenu.Item>
							{/each}
							<DropdownMenu.Separator />
							<DropdownMenu.Item onSelect={() => go('tokens')}>Tokens</DropdownMenu.Item>
							<DropdownMenu.Item onSelect={() => go('installer')}>Installer</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu.Root>
			</div>
		</div>
	</div>
</header>

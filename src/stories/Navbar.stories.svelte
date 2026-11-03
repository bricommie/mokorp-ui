<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, within } from 'storybook/test';
	import Navbar from '#lib/components/Navbar.svelte';
	import Button from '#lib/components/Button.svelte';

	const items = [
		{ label: 'Produit', href: '#produit' },
		{ label: 'Composants', href: '#composants' },
		{ label: 'Tokens', href: '#tokens' },
		{ label: 'Changelog', href: '#changelog' }
	];

	const { Story } = defineMeta({
		title: 'Composants/Navigation/Navbar',
		component: Navbar,
		parameters: {
			docs: {
				description: {
					component:
						'Barre de navigation principale du site : liens, zone de marque, actions. Le lien actif et le survol sont suivis par deux « pilules » animées par ressort ; en mobile, un bouton ouvre un panneau.\n\n**Accessibilité** : landmark `<nav>` nommé par `label`, `aria-current="page"` sur le lien actif, bouton menu avec `aria-expanded`. Toutes les animations s\'éteignent en mouvement réduit.\n\n**Variante `glass`** : surface translucide floutée (`backdrop-blur`) et halo `primary` qui suit la souris avec un ressort mou. Le halo ne réagit qu\'à la souris et au stylet (pas au doigt) et suit le pointeur sans inertie en mouvement réduit.'
				}
			}
		},
		argTypes: {
			items: {
				control: 'object',
				description: 'Liens de navigation `{ label, href }`.',
				table: {
					type: {
						summary: 'NavbarItem[]'
					},
					category: 'Props'
				}
			},
			current: {
				control: 'select',
				options: items.map((i) => i.href),
				description: '`href` de la page courante. Dans SvelteKit : `current={page.url.pathname}`.',
				table: {
					category: 'Props'
				}
			},
			label: {
				control: 'text',
				description: "Nom accessible du landmark `<nav>` (indispensable s'il y a plusieurs nav).",
				table: {
					defaultValue: {
						summary: "'Navigation principale'"
					},
					category: 'Props'
				}
			},
			variant: {
				control: 'inline-radio',
				options: ['solid', 'glass'],
				description:
					'`solid` : surface carte opaque. `glass` : verre dépoli translucide et halo lumineux qui suit la souris (à poser sur un fond riche : image, dégradé).',
				table: {
					type: {
						summary: "'solid' | 'glass'"
					},
					defaultValue: {
						summary: "'solid'"
					},
					category: 'Props'
				}
			},
			menuLabel: {
				control: 'text',
				description: 'Libellé du bouton menu en mobile.',
				table: {
					defaultValue: {
						summary: "'Menu'"
					},
					category: 'Props'
				}
			},
			brand: {
				description: 'Snippet : logo / nom du produit, à gauche.',
				table: {
					type: {
						summary: 'Snippet'
					},
					category: 'Snippets'
				}
			},
			actions: {
				description: 'Snippet : actions à droite (bouton, ThemeToggle).',
				table: {
					type: {
						summary: 'Snippet'
					},
					category: 'Snippets'
				}
			},
			onNavigate: {
				description: 'Appelé au clic sur un lien (fermer un panneau, analytics).',
				table: {
					type: {
						summary: '(item: NavbarItem) => void'
					},
					category: 'Événements'
				}
			}
		},
		args: { items, current: '#composants', label: 'Navigation principale' }
	});
</script>

{#snippet brand()}
	<span class="font-display text-lg font-black tracking-tight">mokorp</span>
{/snippet}

{#snippet actions()}
	<Button size="sm" class="hidden sm:inline-flex">Commencer</Button>
{/snippet}

<!-- Changer `current` dans Controls : la pastille glisse (ressort), elle ne saute pas. -->
<Story name="Default" args={{ brand, actions }} />

<Story
	name="Mobile"
	args={{ brand }}
	globals={{ viewport: { value: 'mobile1' } }}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('button', { name: 'Menu' });
		await userEvent.click(toggle);
		await expect(toggle).toHaveAttribute('aria-expanded', 'true');
		await expect(canvas.getByRole('link', { name: 'Composants' })).toHaveAttribute(
			'aria-current',
			'page'
		);
	}}
/>

<!--
	Survoler la barre : le halo lime suit la souris avec un temps de retard, se resserre au clic
	et s'éteint en sortant. Le fond coloré montre le flou du verre.
-->
<Story
	name="Glass"
	args={{ brand, actions, variant: 'glass' }}
	parameters={{ layout: 'fullscreen' }}
>
	{#snippet template(args)}
		<div class="relative min-h-96 overflow-hidden bg-background p-6">
			<div aria-hidden="true" class="pointer-events-none absolute inset-0">
				<div
					class="absolute -top-10 left-[10%] size-64 rounded-pill bg-secondary/70 blur-3xl"
				></div>
				<div class="absolute top-6 right-[15%] size-56 rounded-pill bg-primary/60 blur-3xl"></div>
				<div class="absolute top-40 left-[40%] size-72 rounded-pill bg-chart-4/50 blur-3xl"></div>
			</div>
			<Navbar {...args} items={args.items ?? items} />
			<p
				class="relative mx-auto mt-24 max-w-md text-center font-display text-4xl font-black text-foreground"
			>
				Le verre laisse passer la couleur.
			</p>
		</div>
	{/snippet}
</Story>

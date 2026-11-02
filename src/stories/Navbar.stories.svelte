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
						'Barre de navigation principale du site : liens, zone de marque, actions. Le lien actif et le survol sont suivis par deux « pilules » animées par ressort ; en mobile, un bouton ouvre un panneau.\n\n**Accessibilité** : landmark `<nav>` nommé par `label`, `aria-current="page"` sur le lien actif, bouton menu avec `aria-expanded`. Toutes les animations s\'éteignent en mouvement réduit.'
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

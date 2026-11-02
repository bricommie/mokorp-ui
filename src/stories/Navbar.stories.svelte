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
		title: 'Components/Navbar',
		component: Navbar,
		args: { items, current: '#composants', label: 'Navigation principale' },
		argTypes: {
			current: { control: 'select', options: items.map((i) => i.href) }
		}
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

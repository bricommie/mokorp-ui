import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createRawSnippet } from 'svelte';
import Composant from './Composant.svelte';

// Tester ce que le WRAPPER ajoute (prop bindable, état dérivé, handler intercepté,
// attributs ARIA) : le comportement de base est déjà testé par Bits UI.
const children = createRawSnippet(() => ({ render: () => '<span>Contenu</span>' }));

describe('Composant', () => {
	it('rend son contenu', async () => {
		const screen = await render(Composant, { children });
		await expect.element(screen.getByText('Contenu')).toBeVisible();
	});

	it('applique la classe du consommateur en dernier', async () => {
		const screen = await render(Composant, { children, class: 'mt-4' });
		expect(screen.container.firstElementChild).toHaveClass('mt-4');
	});
});

import { expect, test } from '@playwright/test';

test('affiche le titre principal', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('bascule le thème et le mémorise', async ({ page }) => {
	await page.goto('/');
	const html = page.locator('html');
	const before = await html.evaluate((el) => el.classList.contains('dark'));
	await page.getByRole('button', { name: 'Basculer le thème' }).click();
	await expect(html).toHaveClass(before ? /^(?!.*\bdark\b)/ : /\bdark\b/);
	await page.reload();
	await expect(html).toHaveClass(before ? /^(?!.*\bdark\b)/ : /\bdark\b/);
});

test('un switch remonte son état au parent (bind:checked)', async ({ page }) => {
	await page.goto('/');
	const sw = page.getByRole('switch', { name: 'Canal bêta' });
	await expect(sw).toHaveAttribute('aria-checked', 'false');
	await sw.click();
	await expect(sw).toHaveAttribute('aria-checked', 'true');
});

test('le select affiche le label de ses options', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('combobox', { name: 'Région' }).click();
	await expect(page.getByRole('option', { name: 'Francfort (eu-central-1)' })).toBeVisible();
});

test('la page ne déborde pas en largeur sur mobile', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');
	const overflow = await page.evaluate(
		() => document.documentElement.scrollWidth - document.documentElement.clientWidth
	);
	expect(overflow).toBeLessThanOrEqual(0);
});

import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

/**
 * Garde-fou — §8.3 : aucun composant ne doit contenir de littéral de couleur
 * brute (hex, oklch, rgb/hsl…). Les valeurs concrètes vivent uniquement dans
 * `src/lib/theme/themes/*.css`.
 */

// #RGB / #RGBA / #RRGGBB / #RRGGBBAA
const HEX = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/;
// fonctions de couleur suivies d'une valeur numérique
const COLOR_FN = /\b(oklch|oklab|lab|lch|rgb|rgba|hsl|hsla|hwb|color)\(\s*[-+#0-9.]/i;

function walk(dir: string, out: string[] = []): string[] {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) {
			walk(full, out);
		} else if (/\.(svelte|ts)$/.test(entry.name) && !/\.(test|spec)\.(ts|js)$/.test(entry.name)) {
			out.push(full);
		}
	}
	return out;
}

// Racine des composants : `src/lib`.
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

describe('garde-fou « aucune couleur brute dans un composant »', () => {
	const files = walk(root);

	it('il existe des fichiers de composants à vérifier', () => {
		expect(files.length).toBeGreaterThan(0);
	});

	for (const file of files) {
		it(`${file} ne contient aucun littéral de couleur`, () => {
			const source = readFileSync(file, 'utf8');
			expect(source).not.toMatch(HEX);
			expect(source).not.toMatch(COLOR_FN);
		});
	}
});

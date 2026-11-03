import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

/**
 * Garde-fou — documentation IDE : chaque composant porte un commentaire
 * `<!-- @component … -->` en tête de fichier. C'est ce texte que l'IDE affiche
 * au survol d'une balise (Svelte for VS Code, WebStorm), et que `svelte-package`
 * recopie en JSDoc dans `dist/**.svelte.d.ts` pour les applications consommatrices.
 *
 * Convention : `docs/component-guide.md` § « Documentation IDE ».
 */

const root = dirname(fileURLToPath(import.meta.url));

function walk(dir: string, out: string[] = []): string[] {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) walk(full, out);
		else if (entry.name.endsWith('.svelte')) out.push(full);
	}
	return out;
}

// Bloc en tête de fichier, avant le premier `<script>`.
const DOC = /^<!--\n@component\n([\s\S]*?)\n-->\n/;

describe('garde-fou « chaque composant est documenté pour l’IDE »', () => {
	const files = walk(root);

	it('il existe des composants à vérifier', () => {
		expect(files.length).toBeGreaterThan(0);
	});

	for (const file of files) {
		const name = relative(root, file);
		it(`${name} commence par un bloc @component`, () => {
			const match = readFileSync(file, 'utf8').match(DOC);
			expect(match, 'bloc <!-- @component … --> absent ou mal placé').not.toBeNull();
			const body = match![1];
			// `**Nom** — description` : le nom affiché est celui de l'import consommateur.
			expect(body).toMatch(/^\*\*[A-Z][\w.]*\*\* — \S/);
			// Un `<!--` imbriqué fermerait le bloc trop tôt ; une balise script
			// dans un exemple trompe certains préprocesseurs.
			expect(body).not.toContain('<!--');
			expect(body).not.toMatch(/<script[\s>]/);
		});
	}
});

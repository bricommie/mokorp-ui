/**
 * État du thème (light / dark) — §9.6.
 *
 * - La classe `.dark` sur `<html>` est la source de vérité (appliquée avant le
 *   premier rendu par le script inline de `app.html` → pas de flash).
 * - `sync()` relit cette classe (à appeler au montage côté client).
 * - Le choix est persisté dans `localStorage` (clé `mokorp-theme`).
 */
export type Theme = 'light' | 'dark';

const KEY = 'mokorp-theme';

let current = $state<Theme>('light');

export const theme = {
	get current(): Theme {
		return current;
	},
	/** Relit le thème effectivement appliqué sur `<html>`. */
	sync() {
		if (typeof document === 'undefined') return;
		current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	},
	set(next: Theme) {
		current = next;
		if (typeof document === 'undefined') return;
		document.documentElement.classList.toggle('dark', next === 'dark');
		try {
			localStorage.setItem(KEY, next);
		} catch {
			/* stockage indisponible : le thème reste valable pour la session */
		}
	},
	toggle() {
		theme.set(current === 'dark' ? 'light' : 'dark');
	}
};

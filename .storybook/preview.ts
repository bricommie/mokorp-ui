import type { Preview } from '@storybook/sveltekit';

import '../src/lib/theme/index.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo'
		}
	},

	// Sélecteur de face dans la barre d'outils : chaque story se vérifie en clair ET en sombre.
	globalTypes: {
		theme: {
			description: 'Face du thème Signal',
			toolbar: {
				title: 'Face',
				icon: 'contrast',
				items: [
					{ value: 'light', title: 'Claire', icon: 'sun' },
					{ value: 'dark', title: 'Sombre', icon: 'moon' }
				],
				dynamicTitle: true
			}
		},
		// Teste chaque story avec ET sans mouvement, sans changer le réglage de son OS.
		motion: {
			description: 'Réduire les animations (prefers-reduced-motion)',
			toolbar: {
				title: 'Mouvement',
				icon: 'transfer',
				items: [
					{ value: 'full', title: 'Complet' },
					{ value: 'reduced', title: 'Réduit' }
				],
				dynamicTitle: true
			}
		}
	},
	initialGlobals: {
		theme: 'light',
		motion: 'full'
	},
	decorators: [
		(story, context) => {
			// Même source de vérité que l'app : la classe `.dark` sur `<html>`.
			document.documentElement.classList.toggle('dark', context.globals.theme === 'dark');
			// Même contrat que l'app : `data-motion="reduced"` éteint les tokens CSS et `isReducedMotion()`.
			if (context.globals.motion === 'reduced') document.documentElement.dataset.motion = 'reduced';
			else delete document.documentElement.dataset.motion;
			return story();
		}
	]
};

export default preview;

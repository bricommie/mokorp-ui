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
		}
	},
	initialGlobals: {
		theme: 'light'
	},
	decorators: [
		(story, context) => {
			// Même source de vérité que l'app : la classe `.dark` sur `<html>`.
			document.documentElement.classList.toggle('dark', context.globals.theme === 'dark');
			return story();
		}
	]
};

export default preview;

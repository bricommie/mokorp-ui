import type { Preview } from '@storybook/sveltekit';
import type { ArgTypes } from 'storybook/internal/types';

import '../src/lib/theme/index.css';
import { docsTheme } from './theme.js';

/*
 * ─── Curation des argTypes ──────────────────────────────────────────────────
 *
 * Nos wrappers transmettent `...rest` à bits-ui, donc leurs props héritent de
 * TOUS les attributs HTML (≈ 430 entrées : `aria-*`, `on*`, `accesskey`…).
 * Le docgen les liste fidèlement, ce qui noie l'API réelle du composant.
 *
 * Règle : un attribut natif est masqué de la table et des Controls, SAUF s'il
 * est déclaré dans les `argTypes` de la story avec une catégorie
 * (`table: { category: 'Props' }`). Le docgen range tout dans la catégorie
 * générique `properties` : une autre catégorie prouve que la prop a été
 * documentée à la main et fait partie de l'API (ex. `disabled` sur Button,
 * `aria-invalid` sur Input). Les `args` passés à une story fonctionnent toujours.
 *
 * On ne peut pas se fier à la description seule : les types HTML de Svelte
 * décrivent déjà chaque attribut `aria-*` (en anglais).
 */
const NATIVE_ATTRIBUTES = new Set([
	// Attributs globaux HTML / microdonnées / RDFa
	'about',
	'accesskey',
	'autocapitalize',
	'autofocus',
	'autosave',
	'color',
	'contenteditable',
	'contextmenu',
	'datatype',
	'dir',
	'draggable',
	'elementtiming',
	'enterkeyhint',
	'hidden',
	'id',
	'inert',
	'inlist',
	'inputmode',
	'is',
	'itemid',
	'itemprop',
	'itemref',
	'itemscope',
	'itemtype',
	'lang',
	'part',
	'placeholder',
	'popover',
	'prefix',
	'property',
	'radiogroup',
	'resource',
	'results',
	'role',
	'security',
	'slot',
	'spellcheck',
	'style',
	'tabindex',
	'title',
	'translate',
	'typeof',
	'unselectable',
	'vocab',
	'writingsuggestions',
	'xmlns',
	// Attributs de formulaire / <input> / <button>
	'accept',
	'alt',
	'autocomplete',
	'autocorrect',
	'capture',
	'checked',
	'command',
	'commandfor',
	'defaultChecked',
	'defaultchecked',
	'defaultValue',
	'defaultvalue',
	'dirname',
	'files',
	'for',
	'form',
	'formaction',
	'formenctype',
	'formmethod',
	'formnovalidate',
	'formtarget',
	'group',
	'height',
	'href',
	'indeterminate',
	'list',
	'max',
	'maxlength',
	'min',
	'minlength',
	'multiple',
	'name',
	'pattern',
	'popovertarget',
	'popovertargetaction',
	'readonly',
	'required',
	'size',
	'src',
	'step',
	'type',
	'webkitdirectory',
	'width',
	'disabled',
	'value'
]);

/** Toujours visibles : le contrat Svelte de chaque wrapper. */
const ALWAYS_VISIBLE = new Set(['children', 'child', 'class', 'ref']);

function isNative(name: string) {
	return (
		name.startsWith('aria-') ||
		name.startsWith('bind:') ||
		name.startsWith('on:') || // directives d'événement héritées de Svelte 4
		name.startsWith('data-') ||
		/^on[a-z]+$/.test(name) || // `onclick`, `onkeydown`… (événements DOM)
		NATIVE_ATTRIBUTES.has(name)
	);
}

/** Catégorie posée par le docgen sur toutes les props extraites. */
const DOCGEN_CATEGORY = 'properties';

function categoryOf(name: string): string {
	if (/^on[A-Z]/.test(name)) return 'Événements';
	if (name === 'children' || name === 'child') return 'Snippets';
	if (name === 'class' || name === 'ref') return 'Svelte';
	return 'Props';
}

/** Ordre d'affichage des catégories dans la table des props. */
const CATEGORY_ORDER = ['Props', 'Événements', 'Snippets', 'Svelte'];

function curateArgTypes({ argTypes }: { argTypes: ArgTypes }): ArgTypes {
	const curated: ArgTypes = {};
	for (const [name, argType] of Object.entries(argTypes)) {
		const category = argType.table?.category;
		const documented = category !== undefined && category !== DOCGEN_CATEGORY;
		const hidden = isNative(name) && !documented && !ALWAYS_VISIBLE.has(name);
		curated[name] = {
			...argType,
			table: hidden
				? { ...argType.table, disable: true }
				: { ...argType.table, category: documented ? category : categoryOf(name) }
		};
	}
	// Storybook affiche les catégories dans l'ordre de leur première apparition :
	// on réordonne pour que l'API (Props) passe avant les détails Svelte.
	const rank = (name: string) => {
		const i = CATEGORY_ORDER.indexOf(curated[name].table?.category ?? '');
		return i === -1 ? CATEGORY_ORDER.length : i;
	};
	return Object.fromEntries(
		Object.keys(curated)
			.sort((a, b) => rank(a) - rank(b))
			.map((name) => [name, curated[name]])
	);
}

const preview: Preview = {
	// Une page Docs générée pour chaque composant (props, stories, code).
	tags: ['autodocs'],

	argTypesEnhancers: [curateArgTypes],

	parameters: {
		controls: {
			expanded: true,
			sort: 'requiredFirst',
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		docs: {
			theme: docsTheme,
			toc: { headingSelector: 'h2, h3', title: 'Sur cette page' },
			// `code` : le code affiché reflète les args courants de la story.
			source: { type: 'dynamic' }
		},

		options: {
			storySort: {
				order: [
					'Introduction',
					'Démarrer',
					['Installation', 'Utilisation', 'Thèmes et faces'],
					'Fondations',
					[
						'Principes',
						'Couleurs',
						'Typographie',
						'Espacements',
						'Rayons et bordures',
						'Élévation',
						'Mouvement'
					],
					'Guides',
					['Accessibilité', 'Écrire une story', 'Créer un composant'],
					'Composants',
					[
						'Actions',
						'Formulaires',
						'Dates et heures',
						'Superpositions',
						'Navigation',
						'Données et retours',
						'Mise en page'
					]
				]
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

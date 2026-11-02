import { create } from 'storybook/theming';

/*
 * Habillage de l'interface Storybook (barre latérale, barre d'outils, pages Docs).
 * Valeurs reprises de la face claire du thème Signal (`src/lib/theme/themes/light.css`).
 * Le manager Storybook ne lit pas nos variables CSS : ces valeurs sont recopiées ici,
 * c'est le seul endroit hors du thème où elles le sont (et ce n'est pas un composant).
 */
const fonts = {
	fontBase: "'Archivo Variable', 'Archivo', ui-sans-serif, system-ui, sans-serif",
	fontCode: "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace"
};

export const managerTheme = create({
	base: 'light',
	brandTitle: 'mokorp-ui · Signal',
	brandUrl: 'https://github.com/bricommie/mokorp-ui',
	brandTarget: '_blank',
	...fonts,
	colorPrimary: '#6a2fb0',
	colorSecondary: '#6a2fb0',
	appBg: '#f5f3f7',
	appContentBg: '#ffffff',
	appPreviewBg: '#f5f3f7',
	appBorderColor: '#e4e0ea',
	appBorderRadius: 12,
	textColor: '#16111c',
	textMutedColor: '#5e566a',
	barBg: '#ffffff',
	barSelectedColor: '#6a2fb0',
	barHoverColor: '#6a2fb0',
	inputBorderRadius: 12
});

export const docsTheme = create({
	base: 'light',
	...fonts,
	colorPrimary: '#6a2fb0',
	colorSecondary: '#6a2fb0',
	appContentBg: '#ffffff',
	appBorderColor: '#e4e0ea',
	appBorderRadius: 12,
	textColor: '#16111c',
	textMutedColor: '#5e566a'
});

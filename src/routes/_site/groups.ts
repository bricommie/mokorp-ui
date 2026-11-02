/** Familles de composants du catalogue (ancres de la page + entrées de navigation). */
export const groups = [
	{ id: 'actions', label: 'Actions', hint: 'Boutons, bascules, barres d’outils' },
	{ id: 'formulaires', label: 'Formulaires', hint: 'Champs, choix, dates, notes' },
	{ id: 'superpositions', label: 'Superpositions', hint: 'Dialogues, menus, infobulles' },
	{ id: 'navigation', label: 'Navigation', hint: 'Onglets, pagination, accordéons' },
	{ id: 'donnees', label: 'Données et retours', hint: 'Tableaux, jauges, alertes' }
] as const;

export const REPO = 'https://github.com/bricommie/mokorp-ui';

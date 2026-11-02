<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ThemeToggle from '#lib/components/ThemeToggle.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Actions/ThemeToggle',
		component: ThemeToggle,
		parameters: {
			docs: {
				description: {
					component:
						"Bouton qui bascule entre la face **claire** et la face **sombre** du thème. Il pose la classe `.dark` sur `<html>` et mémorise le choix dans `localStorage` (clé `mokorp-theme`).\n\nPour piloter le thème sans ce bouton : `import { theme } from 'mokorp-ui'` puis `theme.toggle()` / `theme.set('dark')`."
				}
			}
		},
		argTypes: {
			label: {
				control: 'text',
				description: "Nom accessible du bouton (il n'affiche qu'une icône).",
				table: {
					defaultValue: {
						summary: "'Basculer le thème'"
					},
					category: 'Props'
				}
			}
		}
	});
</script>

<Story name="Default" />

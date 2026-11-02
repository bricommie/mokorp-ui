<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Progress from '#lib/components/Progress.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Données et retours/Progress',
		component: Progress,
		parameters: {
			docs: {
				description: {
					component:
						"Avancement d'une **tâche** (téléversement, build). Sans `value` connue (`null`), la barre devient indéterminée (animation neutralisée en mouvement réduit). Pour une **mesure** (espace disque), utilisez `Meter`.\n\n**Accessibilité** : rôle `progressbar` ; donnez un `aria-label` (« Téléversement »)."
				}
			}
		},
		argTypes: {
			value: {
				control: 'range',
				description: 'Avancement, entre `min` et `max`. `null` = indéterminé.',
				table: {
					type: {
						summary: 'number | null'
					},
					category: 'Props'
				}
			},
			max: {
				control: 'number',
				description: 'Valeur maximale.',
				table: {
					defaultValue: {
						summary: '100'
					},
					category: 'Props'
				}
			}
		},
		args: { value: 40 }
	});
</script>

<Story name="Default" args={{ value: 40 }} />
<Story name="Complete" args={{ value: 100 }} />
<Story name="Empty" args={{ value: 0 }} />

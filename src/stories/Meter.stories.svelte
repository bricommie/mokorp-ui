<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Meter from '#lib/components/Meter.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Données et retours/Meter',
		component: Meter,
		parameters: {
			docs: {
				description: {
					component:
						"**Mesure** d'une grandeur dans un intervalle connu (quota, batterie, score). Pour l'avancement d'une tâche, utilisez `Progress`.\n\n**Accessibilité** : rôle `meter` ; donnez un `aria-label` et, si utile, `aria-valuetext` (« 6 Go sur 10 »)."
				}
			}
		},
		argTypes: {
			value: {
				control: 'range',
				description: 'Valeur mesurée.',
				table: {
					category: 'Props'
				}
			},
			min: {
				control: 'number',
				description: 'Valeur minimale.',
				table: {
					defaultValue: {
						summary: '0'
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
		args: { value: 60 }
	});
</script>

<Story name="Default" args={{ value: 60 }} />
<Story name="Low" args={{ value: 15 }} />
<Story name="High" args={{ value: 90 }} />

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Label from '#lib/components/Label.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/Label',
		component: Label,
		parameters: {
			docs: {
				description: {
					component:
						"Libellé d'un champ de formulaire (`font-body text-sm font-semibold`, casse normale). Cliquer dessus donne le focus au champ associé.\n\n**Accessibilité** : `for` doit correspondre à l'`id` du champ. Pour les composants Bits UI qui n'ont pas d'`id` (Checkbox, Switch), utilisez `aria-labelledby` ou placez le contrôle dans le `Label`."
				}
			}
		},
		argTypes: {
			for: {
				control: 'text',
				description: '`id` du champ associé.',
				table: {
					category: 'Props'
				}
			}
		}
	});
</script>

<Story name="Default">Field label</Story>
<Story name="For input" args={{ for: 'email' }}>Email address</Story>

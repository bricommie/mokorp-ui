<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Checkbox from '#lib/components/checkbox/index.js';
	import { Root } from '#lib/components/checkbox/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/Checkbox',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Case à cocher : choix **indépendants** (j'accepte, recevoir les e-mails). Pour un choix exclusif, utilisez `RadioGroup` ; pour un réglage à effet immédiat, `Switch`.\n\n**Anatomie** : `Checkbox.Root` (la case, coche intégrée) ; `Checkbox.Group` + `Checkbox.GroupLabel` pour une liste de cases liées.\n\nSupporte l'état **indéterminé** (« tout sélectionner » partiel)."
				}
			}
		},
		argTypes: {
			checked: {
				control: 'boolean',
				description: 'État coché. Utilisable avec `bind:checked`.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			indeterminate: {
				control: 'boolean',
				description: "État mixte : ni coché ni décoché (sélection partielle d'une liste).",
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			onCheckedChange: {
				description: "Appelé quand l'état change.",
				table: {
					type: {
						summary: '(checked: boolean) => void'
					},
					category: 'Événements'
				}
			},
			disabled: {
				control: 'boolean',
				description: 'Désactive le composant : ni focus, ni interaction.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			name: {
				control: 'text',
				description: 'Nom du champ envoyé avec le formulaire.',
				table: {
					category: 'Props'
				}
			},
			required: {
				control: 'boolean',
				description: 'Rend la case obligatoire pour soumettre le formulaire.',
				table: {
					category: 'Props'
				}
			}
		}
	});
</script>

<Story name="Checked" args={{ checked: true }} />
<Story name="Unchecked" args={{ checked: false }} />
<Story name="Indeterminate" args={{ indeterminate: true }} />
<Story name="Disabled" args={{ checked: true, disabled: true }} />

<Story name="Group" asChild>
	<Checkbox.Group value={['accept']}>
		<Checkbox.GroupLabel>Toppings</Checkbox.GroupLabel>
		<div class="flex items-center gap-2">
			<Checkbox.Root value="accept" />
			<span class="font-body text-sm text-foreground">Accept terms</span>
		</div>
		<div class="flex items-center gap-2">
			<Checkbox.Root value="newsletter" />
			<span class="font-body text-sm text-foreground">Subscribe to newsletter</span>
		</div>
	</Checkbox.Group>
</Story>

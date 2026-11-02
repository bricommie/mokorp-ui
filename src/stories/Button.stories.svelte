<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from '#lib/components/Button.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Actions/Button',
		component: Button,
		parameters: {
			docs: {
				description: {
					component:
						'Déclenche une **action** (envoyer, enregistrer, ouvrir). Pour **naviguer**, passez `href` : le bouton devient un lien `<a>` avec la même apparence.\n\n- **Une seule action `primary` par vue** : c\'est le seul lime de la page. Le reste en `secondary`, `outline` ou `ghost`.\n- `loading` remplace le libellé par un indicateur **sans changer la largeur** et ignore les clics, en gardant le focus (`aria-busy` + `aria-disabled`).\n\n**Accessibilité** : un bouton `size="icon"` n\'a pas de texte, il exige un `aria-label`.'
				}
			}
		},
		argTypes: {
			variant: {
				control: 'select',
				options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'],
				description:
					"Intention visuelle. `primary` = l'action principale (une par vue), `destructive` = action irréversible, `link` = action discrète dans un texte.",
				table: {
					defaultValue: {
						summary: "'primary'"
					},
					category: 'Props'
				}
			},
			size: {
				control: 'select',
				options: ['default', 'sm', 'lg', 'icon'],
				description:
					'Hauteur et padding. `icon` = carré de 44px pour un bouton icône seul (exige `aria-label`).',
				table: {
					defaultValue: {
						summary: "'default'"
					},
					category: 'Props'
				}
			},
			loading: {
				control: 'boolean',
				description:
					'Action en cours : indicateur à la place du libellé, largeur inchangée, clics ignorés, focus conservé.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			loadingLabel: {
				control: 'text',
				description: "Texte annoncé aux lecteurs d'écran pendant `loading`.",
				table: {
					defaultValue: {
						summary: "'Chargement…'"
					},
					category: 'Props'
				}
			},
			disabled: {
				control: 'boolean',
				description:
					'Désactive le bouton. Préférez `loading` pendant une action : `disabled` fait perdre le focus.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			href: {
				control: 'text',
				description: 'Transforme le bouton en lien `<a href>` (navigation) avec la même apparence.',
				table: {
					category: 'Props'
				}
			},
			type: {
				control: 'inline-radio',
				options: ['button', 'submit', 'reset'],
				description: 'Type HTML du bouton dans un formulaire.',
				table: {
					defaultValue: {
						summary: "'button'"
					},
					category: 'Props'
				}
			},
			onclick: {
				description: 'Appelé au clic (ignoré pendant `loading`).',
				table: {
					type: {
						summary: '(e: MouseEvent) => void'
					},
					category: 'Événements'
				}
			}
		},
		args: {
			variant: 'primary',
			size: 'default',
			loading: false
		}
	});
</script>

<script lang="ts">
	let saving = $state(false);
</script>

<Story name="Primary" args={{ variant: 'primary' }}>Primary</Story>
<Story name="Secondary" args={{ variant: 'secondary' }}>Secondary</Story>
<Story name="Outline" args={{ variant: 'outline' }}>Outline</Story>
<Story name="Ghost" args={{ variant: 'ghost' }}>Ghost</Story>
<Story name="Link" args={{ variant: 'link' }}>Link</Story>
<Story name="Destructive" args={{ variant: 'destructive' }}>Destructive</Story>
<Story name="Small" args={{ size: 'sm' }}>Small</Story>
<Story name="Large" args={{ size: 'lg' }}>Large</Story>
<Story name="Icon" args={{ size: 'icon', 'aria-label': 'Close' }}>✕</Story>

<!-- Mouvement : `loading` est un arg → togglable dans Controls, la largeur ne bouge pas. -->
<Story name="Loading" args={{ loading: true }}>Enregistrer</Story>

<Story name="Loading (interactif)" asChild>
	{@const save = async () => {
		saving = true;
		await new Promise((r) => setTimeout(r, 1600));
		saving = false;
	}}
	<div class="flex gap-3">
		<Button loading={saving} onclick={save}>Enregistrer</Button>
		<Button variant="outline" loading={saving} onclick={save}>Publier la version</Button>
	</div>
</Story>

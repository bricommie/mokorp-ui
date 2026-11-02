<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as RatingGroup from '#lib/components/rating-group/index.js';
	import { Root } from '#lib/components/rating-group/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Formulaires/RatingGroup',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						"Note sur une échelle (étoiles). L'état sélectionné ne repose pas sur la couleur : remplissage **plein** vs **contour**.\n\n**Anatomie** : `RatingGroup.Root` (snippet `children` avec `items`) › `RatingGroup.Item`."
				}
			}
		},
		argTypes: {
			value: {
				control: 'number',
				description: 'Note actuelle. Utilisable avec `bind:value`.',
				table: {
					defaultValue: {
						summary: '0'
					},
					category: 'Props'
				}
			},
			max: {
				control: 'number',
				description: "Nombre d'éléments de l'échelle.",
				table: {
					defaultValue: {
						summary: '5'
					},
					category: 'Props'
				}
			},
			allowHalf: {
				control: 'boolean',
				description: 'Autorise les demi-notes.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
				}
			},
			readonly: {
				control: 'boolean',
				description: 'Lecture seule : la valeur est visible et focusable mais ne peut pas changer.',
				table: {
					defaultValue: {
						summary: 'false'
					},
					category: 'Props'
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
			}
		},
		args: { value: 3 }
	});
</script>

<Story name="Default" args={{ value: 3 }}>
	<RatingGroup.Item index={0} />
	<RatingGroup.Item index={1} />
	<RatingGroup.Item index={2} />
	<RatingGroup.Item index={3} />
	<RatingGroup.Item index={4} />
</Story>

<Story name="Empty" args={{ value: 0 }}>
	<RatingGroup.Item index={0} />
	<RatingGroup.Item index={1} />
	<RatingGroup.Item index={2} />
	<RatingGroup.Item index={3} />
	<RatingGroup.Item index={4} />
</Story>

<Story name="Disabled" args={{ value: 3, disabled: true }}>
	<RatingGroup.Item index={0} />
	<RatingGroup.Item index={1} />
	<RatingGroup.Item index={2} />
	<RatingGroup.Item index={3} />
	<RatingGroup.Item index={4} />
</Story>

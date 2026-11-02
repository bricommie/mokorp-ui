<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import AspectRatio from '#lib/components/AspectRatio.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Mise en page/AspectRatio',
		component: AspectRatio,
		parameters: {
			docs: {
				description: {
					component:
						'Conteneur qui conserve un **ratio** (16/9, 1/1) quelle que soit la largeur : images, vidéos, cartes.'
				}
			}
		},
		argTypes: {
			ratio: {
				control: 'number',
				description: 'Rapport largeur / hauteur, ex. `16 / 9`.',
				table: {
					defaultValue: {
						summary: '1'
					},
					category: 'Props'
				}
			}
		},
		args: { ratio: 16 / 9 }
	});
</script>

<Story name="Default" args={{ ratio: 16 / 9 }}>
	<div class="flex h-full w-full items-center justify-center bg-muted font-display text-foreground">
		16 / 9
	</div>
</Story>

<Story name="Square" args={{ ratio: 1 }}>
	<div class="flex h-full w-full items-center justify-center bg-muted font-display text-foreground">
		1 / 1
	</div>
</Story>

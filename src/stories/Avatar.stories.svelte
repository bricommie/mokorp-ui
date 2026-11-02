<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Avatar from '#lib/components/avatar/index.js';
	import { Root } from '#lib/components/avatar/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Données et retours/Avatar',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Image de profil avec **repli** (initiales) si l\'image manque ou ne charge pas.\n\n**Anatomie** : `Avatar.Root` › `Avatar.Image` · `Avatar.Fallback`.\n\n**Accessibilité** : `alt` sur l\'image (le nom de la personne), ou `alt=""` si le nom est déjà écrit à côté.'
				}
			}
		},
		argTypes: {
			delayMs: {
				control: 'number',
				description:
					"Délai avant d'afficher le repli, en ms (évite un flash sur une connexion rapide).",
				table: {
					defaultValue: {
						summary: '0'
					},
					category: 'Props'
				}
			}
		}
	});
</script>

<Story name="With Image">
	<Avatar.Root>
		<Avatar.Image src="https://github.com/shadcn.png" alt="Avatar" />
		<Avatar.Fallback>SC</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="Fallback">
	<Avatar.Root>
		<Avatar.Fallback>JD</Avatar.Fallback>
	</Avatar.Root>
</Story>

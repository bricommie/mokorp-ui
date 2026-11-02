<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Kbd from '#lib/components/Kbd.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Données et retours/Kbd',
		component: Kbd,
		parameters: {
			docs: {
				description: {
					component:
						'Affiche une **touche** ou un raccourci clavier (`⌘` `K`). Une touche par `Kbd`.'
				}
			}
		}
	});
</script>

<Story name="Default" asChild>
	<p class="flex items-center gap-1"><Kbd>⌘</Kbd><Kbd>K</Kbd></p>
</Story>

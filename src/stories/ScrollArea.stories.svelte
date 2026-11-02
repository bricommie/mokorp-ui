<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as ScrollArea from '#lib/components/scroll-area/index.js';
	import { Root } from '#lib/components/scroll-area/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Mise en page/ScrollArea',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Zone défilante avec des barres de défilement **stylées** et cohérentes entre navigateurs.\n\n**Anatomie** : `ScrollArea.Root` › `ScrollArea.Viewport` (le contenu) · `ScrollArea.Scrollbar` › `ScrollArea.Thumb` · `ScrollArea.Corner`.\n\n**Accessibilité** : la zone doit être focusable au clavier si elle contient du texte (`tabindex="0"` sur le viewport).'
				}
			}
		},
		argTypes: {
			type: {
				control: 'select',
				options: ['hover', 'scroll', 'auto', 'always'],
				description:
					'Visibilité des barres : `hover` (au survol), `scroll` (pendant le défilement), `auto`, `always`.',
				table: {
					defaultValue: {
						summary: "'hover'"
					},
					category: 'Props'
				}
			}
		},
		args: {
			type: 'scroll'
		}
	});
</script>

<Story name="Default" asChild>
	<ScrollArea.Root type="scroll" class="h-48 w-64 border-2 border-border">
		<ScrollArea.Viewport class="p-4">
			<p class="font-body text-sm">
				Contenu long à faire défiler dans une zone à coins nets. Le scrollbar structurel (encre 2px)
				apparaît à droite et en bas.
			</p>
			{#each Array.from({ length: 20 }) as _, i}
				<p class="mt-2 font-mono text-xs text-muted-foreground">Ligne {i + 1}</p>
			{/each}
		</ScrollArea.Viewport>
		<ScrollArea.Scrollbar orientation="vertical">
			<ScrollArea.Thumb />
		</ScrollArea.Scrollbar>
		<ScrollArea.Scrollbar orientation="horizontal">
			<ScrollArea.Thumb />
		</ScrollArea.Scrollbar>
		<ScrollArea.Corner />
	</ScrollArea.Root>
</Story>

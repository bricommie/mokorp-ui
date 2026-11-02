<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Separator from '#lib/components/Separator.svelte';

	const { Story } = defineMeta({
		title: 'Composants/Mise en page/Separator',
		component: Separator,
		parameters: {
			docs: {
				description: {
					component:
						"Ligne de séparation entre deux groupes de contenu.\n\n**Accessibilité** : `decorative` (défaut conseillé) le masque aux lecteurs d'écran ; sinon il est annoncé comme `separator`."
				}
			}
		},
		argTypes: {
			orientation: {
				control: 'inline-radio',
				options: ['horizontal', 'vertical'],
				description: 'Orientation : détermine aussi les flèches du clavier (←/→ ou ↑/↓).',
				table: {
					defaultValue: {
						summary: 'horizontal'
					},
					category: 'Props'
				}
			},
			decorative: {
				control: 'boolean',
				description: "Purement visuel : masqué aux technologies d'assistance.",
				table: {
					category: 'Props'
				}
			}
		}
	});
</script>

<Story name="Default">
	<div class="flex w-full max-w-xs flex-col gap-4">
		<div class="flex h-5 items-center gap-3 font-body text-sm text-foreground">
			<span>Inbox</span>
			<Separator class="flex-1" />
			<span>32</span>
		</div>
		<div class="flex h-5 items-center gap-3 font-body text-sm text-foreground">
			<span>Drafts</span>
			<Separator class="flex-1" />
			<span>8</span>
		</div>
	</div>
</Story>

<Story name="Vertical">
	<div class="flex h-5 items-center gap-3 font-body text-sm text-foreground">
		<span>Left</span>
		<Separator orientation="vertical" />
		<span>Right</span>
	</div>
</Story>

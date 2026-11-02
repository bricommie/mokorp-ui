<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as ScrollArea from '#lib/components/scroll-area/index.js';
	import { Root } from '#lib/components/scroll-area/index.js';

	const { Story } = defineMeta({
		title: 'Components/ScrollArea',
		component: Root,
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

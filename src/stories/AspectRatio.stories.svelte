<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import AspectRatio from '#lib/components/AspectRatio.svelte';

	const { Story } = defineMeta({
		title: 'Components/AspectRatio',
		component: AspectRatio,
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

<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Separator from '#lib/components/Separator.svelte';

	const { Story } = defineMeta({
		title: 'Components/Separator',
		component: Separator
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

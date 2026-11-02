<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Avatar from '#lib/components/avatar/index.js';
	import { Root } from '#lib/components/avatar/index.js';

	const { Story } = defineMeta({
		title: 'Components/Avatar',
		component: Root
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

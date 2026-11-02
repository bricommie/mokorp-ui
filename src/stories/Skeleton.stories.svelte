<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Skeleton from '#lib/components/Skeleton.svelte';

	const { Story } = defineMeta({
		title: 'Components/Skeleton',
		component: Skeleton
	});
</script>

<Story name="Default" args={{ class: 'h-4 w-64' }} />
<Story name="Avatar" args={{ class: 'size-12 rounded-full' }} />
